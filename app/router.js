import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SendmashnoteENV.locationType
});

Router.map(function() {
  this.route('about');
  this.route('team');
  this.route('privacy');
  this.route('message_sent');
});

export default Router;
