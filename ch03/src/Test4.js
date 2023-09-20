//useEffect : 해당 이벤트를 진행하고, 난 후에 실행되어야할 내용을 기술하는 훅(hook)
import React, {useEffect, useRef } from 'react'

const Test4 = () => {
   const inputRef = useRef();
   useEffect(() => {
      console.log(inputRef);
      inputRef.current.focus();
   },[])
   const loginPro = (e) => {
      alert(`환영합니다. ${inputRef.current.value}님~!`);
   }
  return (
    <header>
      <fieldset>
         <input ref={inputRef} type='text' placeholder='id input' />
      </fieldset>
      <button onClick={loginPro}>Login</button>
    </header>
  )
}

export default Test4