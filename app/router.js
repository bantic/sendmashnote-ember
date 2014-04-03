var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('privacy');
  this.route('tos');

  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
