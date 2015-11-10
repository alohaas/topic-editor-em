import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let topic = this.store.findAll('topic');
    // let topic = this.store.findOne('topic', 1);

    // console.log(topic);
    return topic;
  },
  renderTemplate() {
    this.render('topics.index');
  }
});
