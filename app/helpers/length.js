import Ember from 'ember';

export function length(params) {
  let val = params[0];
  return val != undefined ? val.length : 0;
}

export default Ember.Helper.helper(length);
