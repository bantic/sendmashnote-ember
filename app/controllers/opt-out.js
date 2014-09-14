import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    optOut: function(){
      var email = this.get('email');
      var optOut = this.store.createRecord('optOut',{
        email: email
      });
      var controller = this;
      optOut.save().then(function(){
        controller.set('optedOut', true);
      });
    }
  }
});
