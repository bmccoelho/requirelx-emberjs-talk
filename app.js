var App = Ember.Application.create();
App.Note = DS.Model.extend({
  title: DS.attr( 'string' ),
  body: DS.attr( 'string' )
});

App.Router.map(function() {
  this.resource("notes");
});
