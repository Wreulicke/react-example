import Emitter from 'eventemitter2';
import {ClassComponent} from '../container/Application';
// SHOULD BE Emmtterを隠蔽
class Store extends Emitter {
  constructor() {
    super();

  }
}

export default ClassComponent('Store')(Store);