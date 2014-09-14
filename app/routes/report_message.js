import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var blacklist = this.store.createRecord('blacklist', {
      messageId: params.message_id
    });
    return blacklist.save();
  }
});
