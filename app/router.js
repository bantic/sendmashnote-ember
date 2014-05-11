var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route('about');
  this.route('team');
  this.route('privacy');
  this.route('message', {path: '/messages/:message_id'});
  this.route('message_sent');
});

export default Router;
