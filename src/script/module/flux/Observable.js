
import {ClassComponent} from '../container/Application';
function Factory(state, ... initialDispatchers) {
  const dispatchers = initialDispatchers;
  return new Proxy(state, {
    set(target, key, news) {
      const olds = target[key];
      target[key] = news;
      dispatchers.forEach((d) => d.emit(`change:${key}`, news, olds));
      return true;
    },
    get(target, key) {
      return target[key];
    },
    // TODO dispatchers removavle?
    apply(...newDispatchers) {
      dispatchers.push(...newDispatchers);
    }
  });
}

function Observable(state) {
  return Factory.bind(null, state);
}

export default ClassComponent('Observable')(Observable);