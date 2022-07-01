import React from "react";
import Card from "./Card";

export default function Cards(props){
    return ( 
    <div> {props.cities.map((ciudad, index) => {
        return (
            <Card 
            key={ciudad.id} 
            max={ciudad.main.temp_max} 
            min={ciudad.main.temp_min} 
            img={ciudad.weather[0].icon} 
            onClose={() => alert(ciudad.name)} 
            name={ciudad.name} />)

    })}
    </div>
)};