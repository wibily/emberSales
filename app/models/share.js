import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  status: DS.attr(),
  uuid: DS.attr(),
  createdDate: DS.attr('date'),
  modifiedDate: DS.attr('date'),
  ownerUuid: DS.attr()
});
