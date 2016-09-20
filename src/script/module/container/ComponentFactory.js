const ComponentFactory =(container)=>
  (key, ...deps)=>{
    (target)=>{
      container.regist(key, target, ...deps);
      return target;
    };
  };

export default ComponentFactory;