import React from 'react';

const Test1 = () => {
   const names = ['김이름','이이름','박이름','최이름'];
   const nameList = names.map((data) =>  <li>{data}</li>);
  return (
    <div className='App'>
      <ul>{nameList}</ul>
   </div>
  )
}

export default Test1