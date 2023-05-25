import { useState, useEffect } from "react";
import React from "react";

type Words = {
    quote: string;
    author: string;
};

function Inspos() {
    const [inspo, setInspo] = useState<Words | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect (() => {
        fetch(`https://api.goprogram.ai/inspiration`)
        .then((response) => response.json())
        .then((data) => setInspo(data))
        .catch((error) => setError(error))
    }, []);
    if (error) {
        return (<div> {error.message} </div>)
    }
    else if (!inspo) {
        return (<div> loading </div>)
    }
    else {
         return ( 
        <div className="grid-child inspoStyle"> 
            {inspo.quote}
         </div> ); } 
    }
    
    export default Inspos;