import React, { useReducer } from 'react';
import Counter from './Counter';
const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 }
    case ACTION.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}
  function App(){
   const [state,dispach] = useReducer(reducer, {count:0})
   function increment(){
     dispach({type:ACTION.INCREMENT})
   }
   function decrement(){
    dispach({type:ACTION.DECREMENT})
  }
  return(
    <>
   < Counter count ={decrement} count1 ={increment} />
    <span>{state.count}</span>
    
    </>
  )
 }
 export default App;