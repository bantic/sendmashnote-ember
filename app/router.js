var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'hash'
});

Router.map(function() {
  this.route('about');
  this.route('about_us');
});

export default Router;
