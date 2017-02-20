// view of one person
var viewHelper;

var PersonView = Backbone.View.extend({
    tagName: 'li',

    template: viewHelper.template('personTemplate'),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html( this.template( this.model.toJSON()) );

        return this;
    }

});