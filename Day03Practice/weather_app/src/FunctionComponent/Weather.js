import React from "react";


const Weather =(props)=>{
    const style={
        border:"4px solid white",
        display: "inline-block",
        marginTop: "20px",
        padding: "20px",
        width: "20%",
    }
    return (   
        <div style={style}>
            <h3>Current Weather in {props.result.city} {props.result.country}</h3>
            <p>Temperature: {props.result.temperature}°C</p>
            <p>Humidity: {props.result.humidity}%</p>
            <p>Conditions: {props.result.decription}</p>
        </div>

    )
}

export default Weather;