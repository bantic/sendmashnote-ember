/* global SendmashnoteENV */
import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: SendmashnoteENV.APP.apiHost,
  namespace: 'api'
});
