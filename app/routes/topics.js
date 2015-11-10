import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('topic');
  },
  actions: {
     createTopic(newTopic) {
        this.store.createRecord('topic', {
            name: newTopic,
            instant_answer_topics: []
        }).save();
     },

     updateTopic(topic) {
        topic.save();
      },

     deleteTopic(topic) {
       this.store.findRecord('topic', topic.id).then(function(post) {
        return topic.destroyRecord();
      });
     }

   }
});
