import React from "react";

export default function Card(props) {
    return(
        <div>
            <button onClick={props.onClose}> X </button>
            <h3>{props.name}</h3>
            <h6>Min {props.min}</h6> 
            <h6>Max {props.max}</h6> 
            <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Weather img" />
        </div>
)};   

//props.name. entre {} se renderiza el name que llegara por props
//destructuring, (props) reemplazamos x (name, min, max) y sacamos props de los h3/6

