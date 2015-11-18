import DS from 'ember-data';

export default DS.Model.extend({
  topics: DS.hasMany('topic')
});
