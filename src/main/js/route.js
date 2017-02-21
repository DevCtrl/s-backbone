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

    App.Router = Backbone.Router.extend({
       routes: {
           ''              : 'index',
           'page/:id/*'    : 'page',
           'search/:query' : 'search',
           '*other'             : 'default'
       },

       index: function () {
           console.log('index');
       },

       page: function (id) {
           console.log('Page on ' + id + '!!!');
       },

       search: function (query) {
           console.log('Query: '+ query)
       },

       default: function () {
           console.log('Page not fount')
       }
    });

    new App.Router();
    Backbone.history.start();

}());