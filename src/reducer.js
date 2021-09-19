import { useReduce } from "react";

const reducer=(prev,action)=>{
  switch(action){
    case "INCREAMENT":{
      return prev+1
    }
    case "DECREAMENT":{
      if(prev>0) return prev-1
      return prev
    }
    case "RESET":{
      return 0
    }
    default:{
      return action
    }
  }
}

function CountReducer(){
  // const INC = "INCREAMENT";
  // const DEC = "DECREAMENT";
  // const RESET = "RESET";
  const [count, dispatch] = useReduce(reducer,0)
  return(
    <>
    <h3>Count: {count}</h3>
    <button onClick={()=>{dispatch({type:"INCREAMENT"})}}>+</button>
    <button onClick={()=>{dispatch({type:"DECREAMENT"})}}>-</button>
    <button onClick={()=>{dispatch({type:"RESET"})}}>Reset</button>
    </>
  )
}

export default CountReducer;