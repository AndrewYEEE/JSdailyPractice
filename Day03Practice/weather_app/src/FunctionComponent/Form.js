import React from "react";

const Form = (props)=>{
    const style={
        border: "2px solid black",
        borderRadius: "0px",
        fontSize: "18px",
        margin: "5px",
    }

    return (
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="Choose One..." stype={style}></input>
            <input type="text" name="country" placeholder="Choose One..." stype={style}></input>
            <button style={style}>Get Weather</button>
        </form>
    )

}
export default Form; 

