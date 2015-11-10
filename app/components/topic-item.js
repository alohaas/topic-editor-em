import Ember from 'ember';

export default Ember.Component.extend({
  // rather than wrapping the topic-item.hbs in an li, we
  // declare the tagname here to prevent default wrapping of
  // each <li> in a <div> element.
  tagName: 'li',
  classNameBindings: ['editing', 'viewing'],
  editing: false,
  viewing: false,
  // define actions we want to register and
  // send to a parent route where we will handle
  // some polite reqs to our store
  actions: {
    viewIas() {
      this.toggleProperty('viewing');
    },

    editTopic() {
      this.toggleProperty('editing');
    },

    submitTopic() {
      let topic = this.get('topic');
      this.sendAction('updateTopic', topic);
      this.set('editing', false);
    },

    deleteTopic() {
      let topic = this.get('topic');
      this.sendAction('deleteTopic', topic);
    }
  }
});
