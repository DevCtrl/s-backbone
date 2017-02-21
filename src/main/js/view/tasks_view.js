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