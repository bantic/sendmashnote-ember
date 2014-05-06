console.log('abc');
console.log('api host', ENV.api_host);
export default DS.ActiveModelAdapter.extend({
  host: ENV.api_host
});
