// view of persons
var PeopleView = Backbone.View.extend({
   tagName: 'ul',

    initialize: function () {  },

    render: function () {
        this.collection.each(function (person) {
            var personView = new PersonView({model: person});

            this.$el.append(personView.render().el);
        }, this);

        return this;
    }
});