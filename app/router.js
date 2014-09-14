import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SendmashnoteENV.locationType
});

Router.map(function() {
  this.route('about');
  this.route('team');
  this.route('privacy');
  this.route('message_sent');

  this.route('message', {path: 'messages/:message_id'});
  this.route('report_message', {path:'messages/:message_id/report'});
  this.route('opt_out');
});

export default Router;
