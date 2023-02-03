import {useState} from 'react';
import './App.css';
const LogForm = (props) =>{
    const [content, setContent] = useState("");
    const addThought = (event)=>{
        console.log(content);
        props.addHandler(content);
        event.preventDefault(); //防止瀏覽器執行submit預設功能 (跳轉頁面)
    }

    return (
        <>
            <form onSubmit={
                (event) => addThought(event)
                } >   
                <label>What thoughts do you want to record?</label>
                <br />
                <input 
                    type="text"
                    className="textfield"
                    placeholder="Type Something..."
                    minLength={3}
                    value = {content}
                    onChange={(e)=>{setContent(e.target.value)}} 
                    required/>
                
                <input
                    className="mainbtn" 
                    type="submit"
                    value="Post" />
            
            </form>
        </>
    )
}

export default LogForm;