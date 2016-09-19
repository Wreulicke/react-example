import Emmitter from 'eventemitter2';
// SHOULD BE Emmitterを隠蔽
class Store extends Emmitter{
  constructor(){
    super();
    
  }
}

export default Store;