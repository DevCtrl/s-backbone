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