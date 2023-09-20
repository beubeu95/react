//useReducer : 현재 상태변수(state) 객체와 행동(action) 객체를 인자로 받아서 새로운 상태를 반환하는 훅(hook)
//useState보다 더 복잡하고, 다양한 변수나 객체를 관리할 수 있도록 하는 훅
import React, { useReducer } from 'react'
const Test7 = ({step =1, min=0, max=10}) => {
  const initState = {count:0};
  const reducer = (state, action) => {
   switch(action.type){
      case "COUNTUP" :
         return state.count < action.max ? { count : state.count + action.step }
      case "COUNTDOWN" :
         return state.count > action.min ? { count : state.count - action.step }
      case "RANDOM" :
         return{
            count : Math.floor(Math.random()*(action.max- action.min))+action.min,
         };
      case "RESET" :
         return initState;
      default : throw new Error("action.type 에러 : "+action.type);
      } 
  }
  const [state, dispatch] = useReducer(reducer, initState);
   return (
    <>
      <p> 단계 : {step}, 최대 : {max}, 최소 : {min} </p>
      <h2>현재값 : {state.count}</h2>
      <hr />
      <button onClick={() => dispatch({type:"COUNTUP", step, max})}>증가</button>
      <button onClick={() => dispatch({type:"COUNTDOWN", step, min})}>증가</button>
      <button onClick={() => dispatch({type:"RANDOM", min, max})}>증가</button>
      <button onClick={() => dispatch({type:"RESET"})}>초기화</button>
    </>
  )
}

export default Test7