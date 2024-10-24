import { useEffect } from "react";
import { useState } from "react";

export function Practice8(){
  const [count,changeCount] = useState(0);
  const [feature,changeFeature]= useState(false);

  useEffect(()=>{
    if(count == 10){
      changeFeature(true);
    }
  },[count]);

  const handle=()=>{
    changeCount(count + 1);
  }
  return (
    <div>
      <button 
      style={{backgroundColor:feature?'white':'black',
              color:feature?"black":"white",
              border:feature?"1px solid black":"1px solid white"
      }} onClick={handle}>count increase</button>
      <p>Count is {count}</p>
    </div>
  );
}