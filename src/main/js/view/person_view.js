// view of one person
App.Views.PersonView = Backbone.View.extend({
    tagName: 'li',

    template: window.template('personTemplate'),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html( this.template( this.model.toJSON()) );

        return this;
    }

});