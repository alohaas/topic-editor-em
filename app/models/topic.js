import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  instant_answer_topics: DS.attr()
});
