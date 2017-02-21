// view of persons
App.Views.PeopleView = Backbone.View.extend({
   tagName: 'ul',

    initialize: function () {  },

    render: function () {
        this.collection.each(function (person) {
            var personView = new App.Views.PersonView({model: person});

            this.$el.append(personView.render().el);
        }, this);

        return this;
    }
});