import Ember from 'ember';

export function title(params) {
  let string = params[0];
  return typeof string === 'string' ? string.charAt(0).toUpperCase() + string.slice(1) : string;
}

export default Ember.Helper.helper(title);
