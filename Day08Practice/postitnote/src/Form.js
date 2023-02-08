import React , {memo, useState} from "react";



const Form=(props)=>{
    const [errorMessage, setErrorMessage] = useState("");
    const [colour, setColour] = useState("yellow");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onSubmit = (e)=>{
        e.preventDefault();
        if (title === ""){
            setErrorMessage("Title is required");
        }else{
            props.createPostit(colour,title,content);
            //======Return Default======//
            setErrorMessage("");
            setColour("yellow");
            setContent("");
            setTitle("");
        }
    }; 

    return (
        <div>
            <form onSubmit={(e)=>{onSubmit(e)}}>
                <h2>Add Post-it Note</h2>
                <p>{errorMessage}</p>
                <input 
                    type="text" 
                    className="textfield" 
                    placeholder="Title (Required)"
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    required></input>
                <input 
                    type="text" 
                    className="textfield" 
                    placeholder="Extra Notes"
                    value={content}
                    onChange={(e)=>{setContent(e.target.value)}}></input>

                <select
                    className="textfield"
                    defaultValue="Post-it Colour"
                    onChange={(e)=>{setColour(e.target.value)}}>
                    <option value="Post-it Colour" disabled>Post-it Colour</option>
                    <option value="pink">Pink</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                </select>
                <input className="mainbtn" type="submit" value="送出表單"/>
            </form>
        </div>
    )
    
}

export default memo(Form); //如果父元件刷新，但此元件用到的props沒有變，則不渲染此元件