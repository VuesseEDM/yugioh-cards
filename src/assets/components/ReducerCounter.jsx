import { useReducer } from "react";

const initialState = {count : 0};

const CounterReducer = (state,action) => {
  switch(action.type) {
    case "increment" :
      return {count : state.count + 1}
    case "decrement" :
      return {count : state.count - 1}
    case "reset" :
      return {count : 0}    
  }
}

const CounterWithReducer = () => {
  const [state,dispatch] = useReducer(CounterReducer, initialState);

  return(
    <div>
      <button onClick={() => dispatch({type : "increment"})}>+</button>
      <button onClick={() => dispatch({type : "decrement"})}>-</button>
      <button onClick={() => dispatch({type : "reset"})}>Reset</button>

      <p>Count : {state.count}</p>
    </div>
  )
}
export default CounterWithReducer