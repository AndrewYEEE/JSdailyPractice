import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import UpdateForm from './UpdateForm';
import Postit from './Postit';

function App() {
  const [postits, setPostits] = useState([]);
  const [toggleEditScreen, setToggleEditScreen] = useState(false);
  const [postToEdit, setPostToEdit] = useState(undefined);

  useEffect(()=>{
    const initposts= [
      { title: "Get a haircut!", content: "You look like a caveman", colour: "blue", key: "456def"},
      { title: "Buy Cheese", content: "gouda, edam, swiss, emmental, blue", colour: "pink", key: "123abc"}
    ]
    setPostits(initposts);
  },[]); //render only once


  //========CRUD=======//
  const createPostit=(colour, title, content)=>{
    let oldPostList = [...postits];
    let newPost = {
      title : title,
      content: content,
      colour: colour,
      key: title+Math.random()
    };

    oldPostList.push(newPost);
    setPostits(oldPostList);
  }

  const findPostToEdit = (key)=>{    //when Edit event been trigger
    let nowPost = setEditStatusByKey(key);
    setPostToEdit(nowPost);
    setToggleEditScreen(true);
  }

  const updatePostIt = (colour, title, content)=>{
    let tempPost = postToEdit;
    // let oldPostList = [...postits];
    // oldPostList.forEach((item, index)=>{
    //   if(item.key === key) {
    //     oldPostList[index].colour = colour;
    //     oldPostList[index].title = title;
    //     oldPostList[index].content = content;
    //   }
    // });
    //改成直接新增元件，這樣在顯示時會被reserve()排在最前面
    let newPostList = removePostByKey(tempPost.key);
    tempPost.colour = colour;
    tempPost.content = content;
    tempPost.title = title;
    newPostList.push(tempPost);
    setPostits(newPostList);
    setToggleEditScreen(false);
  }


  //=========Drag & Drop========//
  const onDragStart = (key) => {
    let postToEdit = setEditStatusByKey(key)
    setPostToEdit(postToEdit); //save now item
  }

  const setEditStatusByKey = (key) =>{
    let nowPostList = [...postits];
    let nowPost;
    nowPostList.forEach((item)=>{
      if (item.key === key){
        nowPost = item;
      }
    });
    return nowPost;
  }

  const onDragOver=(e)=>{
    e.preventDefault()
  }

  const onDrop=(e)=>{
    e.preventDefault();
    let key = postToEdit.key;
    setPostits(removePostByKey(key));
  }

  const removePostByKey = (key) => {
    let oldPostList = [...postits]
    let newPostList = []
    oldPostList.forEach((post) => {
      if (post.key !== key) {  newPostList.push(post) }})
    return newPostList
  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Post-it Notes</h2>
        <div className='wrapper'>
          <Form createPostit={createPostit}></Form>
          <div 
            className='trash-can'
            onDrop={(e)=>{onDrop(e)}}
            onDragOver={(e)=>{onDragOver(e)}}>
              <h2>🗑️</h2> 
              <h4>Drag & Drop</h4>
          </div>
        </div>
      
      </header>
      <ul>
        {
            postits.map((p) => {
              return (
              <Postit
                colour={p.colour}
                title={p.title}
                content={p.content}
                postkey={p.key}
                key={Math.random()} 
                onClick={() => findPostToEdit(p.key)}
                onDragStart={() => onDragStart(p.key)}/>
            )}).reverse() //reversing the array so the latest postit shows first 
        }
      </ul>
      {
        toggleEditScreen && <UpdateForm
          colour={postToEdit.colour}
          title={postToEdit.title}
          content={postToEdit.content}
          postkey={postToEdit.key} 
          updatePostIt={updatePostIt}/>
      }


    </div>
  );
}

export default App;
