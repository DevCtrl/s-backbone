(function () {
    window.App = {
        Models: {},
        Views: {},
        Collection: {},
    };

    window.template = function (id) {
        return _.template($('#'+id).html());
    };

    App.Models.Task = Backbone.Model.extend({
        default: {
            title : 'Undefined',
            priority : 0
        },

        validate: function (attrs) {
            if (! $.trim(attrs.title) ) {
                return 'Title of tasks need be valid';
            }
        }
    });

    App.Views.TaskView = Backbone.View.extend({
        tagName: 'li',
        template: template('taskTemplate'),

        initialize: function () {
            _.bindAll(this, 'editTask', 'render');
            this.model.on('change', this.render, this);
            this.model.on('destroy', this.remove, this);
        },

        render: function () {
            var template = this.template(this.model.toJSON());
            this.$el.html( template );
            return this;
        },

        events: {
            'click .edit_btn': 'editTask',
            'click .delete_btn': 'destroy'
        },

        editTask: function () {
            var newTaskTitle = prompt('How you named this task', this.model.get('title'));
            // if ( !newTaskTitle ) return;
            this.model.set('title', newTaskTitle);
        },

        destroy: function () {
            this.model.destroy();
        },

        remove: function () {
            this.$el.remove();
        }
    });

    App.Collection.Tasks = Backbone.Collection.extend({
        model : App.Models.Task
    });

    App.Views.TasksView = Backbone.View.extend({
        tagName: 'ul',

        initialize: function () {
            this.collection.on('add', this.addOne, this);
        },

        render: function () {
            this.collection.each(this.addOne, this);
            return this;
        },

        addOne: function (task) {
            // create new parent view
            var taskView = new App.Views.TaskView({ model: task });
            // add it in root element
            this.$el.append(taskView.render().el);
        }
    });

    App.Views.AddTask = Backbone.View.extend({
        el: '#addTask',

        events: {
            'submit' : 'submit'
        },

        submit: function (e) {
            // cancel default action
            e.preventDefault();

            var newTaskTitle = $(e.currentTarget).find('input[type-text]').val();
            var newTask = new App.Models.Task({
                title: newTaskTitle,
                priority: 1
            });
            this.collection.add(newTask);
        },

        initialize: function () {

        }


    });

    var tasks = new App.Collection.Tasks([
        {
            title: 'Java',
            priority: 5
        },
        {
            title: 'JS',
            priority: 5
        }
    ]);

    var taskView = new App.Views.TasksView({
        collection : tasks
    });

    $('.tasks').html(taskView.render().el);

    var addTaskView = new App.Views.AddTask({
        collection: tasks
    });


}());