export default Ember.Controller.extend({
  actions: {
    sendMessage: function(){
      var message = this.get('message');
      var email   = this.get('email');
      var id      = 'alkj23r';

      var obj = {
        message: message,
        email: email,
        id: id
      };

      this.transitionToRoute('message', obj);
    }
  }
});
