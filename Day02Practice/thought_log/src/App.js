import { useState } from 'react';
import './App.css';
import logo from './empty.svg';
import LogForm from './LogForm';
import Thought from './Thought';

function App() {
  const [thoughtList, setThoughtList] = useState([]);
  
  const deleteThoughtHandler = (thoughtIndex) =>{
    const thoughts = [...thoughtList];
    thoughts.splice(thoughtIndex,1); //移除匹配的第一個元素
    setThoughtList(thoughts); //setState
  }

  const addThoughtHandler = (content) =>{
      const thoughts = [...thoughtList];
      const newthought = {};

      //here we call the current local time
      var date = new Date();
      var hour = date.getHours();
      var mins = date.getMinutes();
      
      //for newthought, we assign it to our ref'd input value
      newthought.content = content;
      newthought.time = (hour +':'+ mins);
      thoughts.push(newthought);
      setThoughtList(thoughts);
  }

  let thoughts = (
    <div>
      {
        thoughtList.map((thought, index) => {
          return <Thought 
            key={"item:"+index}
            content = {thought.content}
            time = {thought.time}
            clickHandle = {()=>deleteThoughtHandler(index)}
          />
        }).reverse() //reversing the array so the latest post shows first
      }  
   </div> 
 ); //純JSX寫法，以()內包<div>運作


  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-inner">
          <img src={logo} className="App-logo" alt="logo"></img>
          <h2>A Simple React App - "Thought Log"</h2>
          <LogForm addHandler={addThoughtHandler}></LogForm>
        </div>
        <div className="App-bottom">
          <h2>List ⮟⮟⮟</h2>
        </div>
      </header>
      <ul>
        {thoughts}
      </ul>
    </div>
  );
}

export default App;
