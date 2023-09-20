//로그인 창 : 아이디와 비밀번호를 입력한 후
//아이디가 admin이고, 비밀번호가 1234인 경우 "로그인 환영" 메시지 출력
//아니면, "아이디 또는 비밀번호가 일치하지 않습니다." 메시지 출력
//그리고, 성공과 실패시 모두 원래 폼을 초기화하여 다시 로딩 시킴
import React, { useState } from 'react'
const Test3 = () => {
    const [ message, setMessage ] = useState('로그인 전');
    const [ form, setForm ] = useState({
        userid:'',
        userpw : ''
      });
      const { userid, userpw } = form;  //폼 객체 분리
      const onChange = (e) => { //onChange 이벤트 기술
        setTimeout(() => console.log(e), 500);
        const nextForm = {      //폼 객체
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
      };
      const onClick = () => {   //onClick 이벤트 기술
        if(userid === 'admin' && userpw === '1234'){
            alert("로그인 환영");
            setMessage('로그인 성공');
        } else {
            alert("아이디 또는 비밀번호가 일치하지 않습니다.");
            setMessage('로그인 실패');
        }
        setForm({
            userid : '',
            userpw : ''
        });
      };
      const onKeyPress = (e) => {//Enter Key 입력시 onClick 이벤트 발생 -> 이벤트 트리거
        if(e.key === 'Enter') {
            onClick();
        }
      };
      const onReset = (e) => {
        alert("로그인을 취소합니다");
        setForm({
            userid : '',
            userpw : ''
        });
        setMessage("로그인 취소");
      };
  return (
    <div className='App'>
        <h1>로그인</h1>
        <hr/>
        <input type='text' name='userid' placeholder='아이디 입력'
            value={userid} onChange={onChange} required />
        <hr/>
        <input type='password' name='userpw' placeholder='비밀번호 입력'
            value={userpw} onChange={onChange} onKeyPress={onKeyPress}
            required />
        <div>{message}</div>
        <hr/>
        <button onClick={onClick}>로그인</button>
        <button onClick={onReset}>취소</button>
    </div>
  )
}
export default Test3