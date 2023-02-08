import React, { memo, useMemo } from "react";

const Postit=(props)=>{
    
    const colour = props.colour;

    const colourStyle = useMemo(()=>{
        return {
            backgroundColor: colour,
        }
    },[colour]); //只有在colour改變時才重新建購
    
    
    return (
        <div 
            draggable
            className="post-it"
            style={colourStyle}
            onDragStart={(e)=>{props.onDragStart(props.postkey)}}
            >
            <ul>
                <h3>{props.title}</h3>
                <li>{props.content}</li>
                <h3>{props.date}</h3>
                <button
                    className="smallbtn"
                    onClick={()=>{
                        props.onClick(props.postkey)
                    }}
                    >Update</button>
            </ul>
        </div>
    ) 
    
}

export default memo(Postit);

