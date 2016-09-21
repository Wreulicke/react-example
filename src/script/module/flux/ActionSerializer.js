
import { Component } from '../container/Application';

const isArray = Array.isArray;
function Factory(store) {
  return ActionSerializer.bind(null, store);
}
function ActionSerializer(store, actions, mutations) {
  return Object.keys(actions).reduce(function(result, key) {
    const events = actions[key];
    if (isArray(events)) {
      result[key] = function(...args) {
        events.forEach((event) => {
          mutations[event](store, ...args);
        });
      };
    } else {
      result[key] = function(...args) {
        mutations[events](store, ...args);
      };
    }
    return result;
  }, {});
}

export default Component('Factory')(Factory);
const serializer = Component('ActionSerializer')(ActionSerializer);
export { serializer as ActionSerializer };