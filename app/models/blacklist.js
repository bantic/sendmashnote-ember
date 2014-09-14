import DS from 'ember-data';

export default DS.Model.extend({
  messageId: DS.attr('string'),
  fbId: DS.attr('string')
});
