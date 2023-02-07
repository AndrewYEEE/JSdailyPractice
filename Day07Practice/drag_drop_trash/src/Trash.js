import React from 'react';

const Trash = (props)=>{
    return (
        <div className='trash' draggable={true} onDragStart={props.onDragStart}>
            <p>{props.name}</p>
        </div>
    )
}

export default Trash;

