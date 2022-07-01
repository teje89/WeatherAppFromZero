import React from "react";

export default function SearchBar(props) {
    return (
    <div>
        <input type="text" />
        <button onClick={()=> props.onSearch()}>Add city</button> 
    </div>
    );
}

//la func onSearch se debe EJECUTAR cdo onClick