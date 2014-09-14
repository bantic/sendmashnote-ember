import Ember from 'ember';

export default Ember.Controller.extend({
  reset: function(){
    this.setProperties({
      text: null,
      email: null
    });
  },
  actions: {
    sendMessage: function(){
      var message = this.store.createRecord('message', {
        text:  this.get('text'),
        email: this.get('email'),
        fbId: this.get('session.fbId')
      });

      var controller = this;
      message.save().then(function(){
        controller.transitionToRoute('message_sent');
      });
    }
  }
});
