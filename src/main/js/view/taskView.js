App.Views.TaskView = Backbone.View.extend({
    tagName: 'li',
    template: template('taskTemplate'),

    initialize: function () {
        _.bindAll(this, 'editTask', 'render');
        this.model.on('change', this.render, this);
    },

    render: function () {
        var template = this.template(this.model.toJSON());
        this.$el.html( template );
        return this;
    },

    events: {
        'click .edit_btn': 'editTask'
    },

    editTask: function () {
        var newTaskTitle = prompt('How you named this task', this.model.get('title'));
        this.model.set('title', newTaskTitle);
    }
});