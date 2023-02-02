import { useState } from 'react';
import './App.css';

function App() {
  const [thoughtList, setThoughtList] = useState([]);
  const deleteThoughtHandler = (thoughtIndex) =>{
    const thoughts = [...thoughtList];
    thoughts.splice(thoughtIndex,1); //移除匹配的第一個元素
    setThoughtList(thoughts); //setState
  }

  const addThoughtHandler = (event) => {
    event.preventDefault(); //防止瀏覽器預設行為，例如點擊<a>開新分頁，保留原本onClick自訂功能
    
  }

  return (
    
  );
}

export default App;
