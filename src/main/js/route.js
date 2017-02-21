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



});