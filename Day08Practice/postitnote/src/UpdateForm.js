import React, {useState, useEffect } from "react";


const UpdateForm=(props)=>{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [colour, setColour] = useState("");

    useEffect(()=>{
        setTitle(props.title);
        setContent(props.content);
        setColour(props.colour);
    },[props]);

    const onSubmit = (e)=>{
        e.preventDefault();
        props.updatePostIt(colour,title,content);
    };

    return (
        <div className="form-background">
            <form
                className="update-form"
                style={{backgroundColor:colour}}
                onSubmit={(e)=>{onSubmit(e)}}
                >
                <h2>Update Note</h2>
                <label>Update title: </label>
                <br/>
                <input
                    type="text"
                    className="textfield"
                    placeholder="Title"
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    ></input>
                <br/>
                
                <label>Update Extra Notes: </label>
                <br/>
                <input
                    type="text"
                    className="textfield"
                    placeholder="Content"
                    value={content}
                    onChange={(e)=>{setContent(e.target.value)}}
                    ></input>
                <br/>
                <input className="mainbtn" type="submit" value="Update Post it"></input>
            </form>
        </div>
    )
}

export default UpdateForm;
