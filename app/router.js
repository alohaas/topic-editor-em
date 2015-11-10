import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('topics', { path: '/' }, function() {
    this.route('ias', { path: '/ias'});
  });
});

export default Router;
