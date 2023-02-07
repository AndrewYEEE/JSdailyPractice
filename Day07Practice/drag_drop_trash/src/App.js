import React, {useState, useEffect, useRef, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Trash from './Trash';


function App() {
  const [status, setStatus] = useState('NA');  //用於顯示用
  const [targetId, setTargetId] = useState();  //
  const [trash, setTrash] = useState([]);      //trash清單
  const mount = useRef(false); //用於紀錄是否是第一次mount

  useEffect(()=>{
    if (mount.current === false){
      //componentDidMount
      const trashList = [
        { name: "banana peel", id: 0},
        { name: "beer can", id: 1}, 
        { name: "apple core", id: 2},
        { name: "chip packet", id: 3}
      ]
      setTrash(trashList);
      mount.current = true;
    }else{
      //componentDidUpdate
      //do nothing....
    }
  },[]);

  const ondragstart = useCallback((id)=>{
    setStatus("onStart");
    setTargetId(id);
  },[]);

  const ondragover = useCallback((e)=>{
    e.preventDefault();
    setStatus("onDragOver");
  },[]);

  // const ondrug = useCallback((e)=>{
  //   e.preventDefault();
  //   let oldList = [...trash];
  //   let target = targetId;
  //   let newList = [];
  //   oldList.forEach((item)=>{
  //     if (item.id !== target) {
  //       newList.push(item);
  //     }
  //   });

  //   setTrash(newList);
  //   setStatus("onDrop");
  // },[trash,targetId]);
  const ondrug = (e)=>{
    e.preventDefault();
    console.log("wdwdwd");
    let oldList = [...trash];
    let target = targetId;
    let newList = [];
    oldList.forEach((item)=>{
      if (item.id !== target) {
        newList.push(item);
      }
    });

    setTrash(newList);
    setStatus("onDrop");
  };

  let trashlayout;
  if (trash.length !== 0 ){
    trashlayout = ( 
      <div>
        {
          trash.map((ele)=>{
            return <Trash
              onDragStart = {(e)=>ondragstart(ele.id)}
              name={ele.name}
              id={ele.id}
              key={"trash "+ele.id}
            ></Trash>
          })
        }
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Drag & Drop Trash Can</h2>
      </header>
      <h3>Drag Status: {status}</h3>

      {trashlayout}
      <div className='trashbody'>
        <img 
          src={require('./img/trashcan.png')}
          className="trash-can"
          onDragOver={(e)=>{ondragover(e)}}
          onDrop={(e)=>{ondrug(e)}}
          alt="trashcan"
        ></img>
      </div>

    </div>
  );
}

export default App;
