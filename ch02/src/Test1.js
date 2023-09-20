//이벤트(event) : 사용자가 특정 요소를 건드리는 사건
//이벤트의 종류 : Mouse, Keyboard, Form, Touch, File, Image, Video, ...
//React는 해당 개체(특정 요소)의 성격에 따라 무수히 많은 이벤트를 지원
//https://facebook.github.io/react/docs/event.html
import React, {Component} from 'react'
import './App.css';

class Test1 extends Component {
   state = { message:'' }
   render() {
      return (
      <div className='App'>
         <h1>이벤트</h1>
         <input type="text"
         name="message"
         placeholder="메시지 입력"
         value={ this.state.message }
         onChange={(e) =>{
            //console.log(e.target.value);
            this.setState({message : e.target.value });
         }}
         />
         <button onClick = {() => {this.setState({message:''})}}>지우기</button>
         <button onClick = {() => {
            if(this.state.message === '현경'){
               alert("ok");
            }else {
               alert("no");
            }
         }
      }>확인</button>
      </div>
      )
   }
}

export default Test1