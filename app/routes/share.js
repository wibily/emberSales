export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('share', params.uuid);
  }
});