import { useState, useEffect } from "react";
import React from "react";

type Info = {
    age: number;
    count: number;
    name: string;
};

function Ages() {
    const [agify, setAgify] = useState<Info | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const [personName, setPersonName] = useState<string | null>(null);

    useEffect (() => {
        if (personName) {
            fetch(`https://api.agify.io?name=${personName}`)
            .then((response) => response.json())
            .then((data) => setAgify(data))
            .catch((error) => setError(error))
        }
    }, [personName]);

    const handleEnterName = () => {
        const name = prompt("Please enter your name"); // alert for user input 
        setPersonName(name);
      };

    if (error) {
        return (<div> {error.message} </div>)
    }
    else if (!agify) { //default msg
        return (
            <div>
                <button className="ageBtn" onClick={handleEnterName}>Enter Name</button> 
                <div>test ur name!</div> 
          </div>
        );
    }
    else {
         return ( 
        <div> 
            <button className="ageBtn" onClick={handleEnterName}>Enter Name</button>
            <div> Name: {agify.name} </div>
            <div> Age Prediction: {agify.age} </div>
         </div> ); } 
    }
    
    export default Ages;