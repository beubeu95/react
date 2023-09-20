import React, { useState } from 'react';

const Test2 = () => {
   const [names, setNames ] = useState([
      {id:1, text:'김이름'},
      {id:2, text:'이이름'},
      {id:3, text:'박이름'},
      {id:4, text:'최이름'}
   ]);
   const [inputText, setInputText ] = useState('');
   const [nextId, setNextId ] = useState(5);
   const onChange = (e) => {setInputText(e.target.value); }
   const onClick = (e) =>{
      const nextNames = names.concat({ //하나의 객체 생성
         id : nextId, text : inputText
      });
      setNextId(nextId+1); //아이디를 하나 증가
      setNames(nextNames); //객체를 배열에 추가
      setInputText('');
   }
   const onRemove = (id) => {
      const nextNames = names.filter(data => data.id !== id);
      setNames(nextNames);
   }
   const nameList = names.map((data) => <li key={data.id } onDoubleClick={() =>
      onRemove(data.id)}>: {data.text}</li>);
  return (
    <div className='App'>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul className='list'>{nameList}</ul>
   </div>
  )
}

export default Test2