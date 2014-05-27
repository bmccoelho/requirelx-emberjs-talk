var App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter;

App.Note = DS.Model.extend({
  title: DS.attr( 'string' ),
  body: DS.attr( 'string' )
});

App.Note.FIXTURES = [
  { id: 1, title: 'joke', body: 'ah! ah!' },
  { id: 2, title: 'idea', body: 'do NOT do talks about ember.js' }
];

App.Router.map(function() {
  this.resource("notes");
});
