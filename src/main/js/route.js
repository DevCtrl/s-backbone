(function () {
    window.App = {
        Models: {},
        Views: {},
        Collection: {},
        Router: {}
    };

    window.template = function (id) {
        return _.template($('#' + id).html());
    };

    var vent = _.extend({}, Backbone.Events);

    App.Views.SpecialTask = Backbone.View.extend({
       initialize: function () {
           vent.on('specialTasks:show', this.show, this);
       },

       show: function (id) {
            var specialTask = this.collection.get('id');
            var specialTaskView = new App.Views.SpecialTask({
                model: specialTask
            });
            $('body').append(specialTaskView.render().el);
       }
    });

    App.Router = Backbone.Router.extend({
       routes: {
           ''                   : 'index',
           'specialTask/:id'    : 'showSpecialTask',
           '*other'             : 'default'
       },

       index: function () {
           console.log('index');
       },

       showSpecialTask: function (id) {
            vent.trigger('specialTasks:show', id);
       },

       default: function () {
           console.log('Page not fount')
       }
    });

    new App.Views.SpecialTask({ collection:someCollection });

    new App.Router();
    Backbone.history.start();

}());