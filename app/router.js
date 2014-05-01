var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'hash'
});

Router.map(function() {
  this.route('about');
  this.route('team');
  this.route('privacy');
  this.route('message', {path: '/message/:message_id'});
});

export default Router;
