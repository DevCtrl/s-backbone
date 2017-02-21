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