(function () {
    window.App = {
        Models: {},
        Views: {},
        Collection: {}
    };

    window.template = function (id) {
        return _.template($('#'+id).html());
    };

    App.Models.Task = Backbone.Model.extend({
        default: {
            name : 'Undefined',
            priority : 0
        }
    });
    App.Views.TaskView = Backbone.View.extend({
        tagName: 'li',

        render: function () {
            this.$el.html( this.model.get('title') );
            return this;
        }
    });
    App.Collection.Task = Backbone.Collection.extend({
       model : App.Models.Task
    });
    App.Views.Tasks = Backbone.View.extend({
        tagName: 'ul',
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

    var tasks = new App.Collection.Task([
        {
            task: 'Java',
            priority: 5
        },
        {
            task: 'JS',
            priority: 5
        }
    ]);

    var taskView = new App.Views.TaskView({
       collection : tasks
    });

    taskView.render();
    $('body').html(taskView.el);

    console.log(taskView.render().el);



}());

// var peopleCollection = new App.Collection.PeopleCollection([
//     {
//         name : 'Rob',
//         age : 20,
//         job : 'Java Developer'
//     },{
//         name : 'Ivan',
//         age : 23,
//         job : 'C# Developer'
//     },{
//         name : 'Anton',
//         age : 28,
//         job : 'PM'
//     }
// ]);
//
// var peopleView = new App.Views.PeopleView({collection : peopleCollection});
//
// $(document.body).append(peopleView.render().el);