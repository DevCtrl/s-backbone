App.Views.AddTask = Backbone.View.extend({
    el: 'addTask',

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