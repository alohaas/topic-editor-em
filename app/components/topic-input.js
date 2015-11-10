import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitTopic(newTopic) {
      if (newTopic) {
        this.sendAction('action', newTopic);
      }
      this.set('newTopic', '');
    }
  }
});
