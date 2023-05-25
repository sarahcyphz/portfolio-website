import { useState, useEffect } from "react";

type Words = { 
    quote: string;
};

function Kanyes() {
    const [kanye, setKanye] = useState<Words | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect (() => {
        fetch(`https://api.kanye.rest/`)
        .then((response) => response.json())
        .then((data) => setKanye(data))
        .catch((error) => setError(error))
    });
    if (error) {
        return (<div> {error.message} </div>)
    }
    else if (!kanye) {
        return (<div> loading </div>)
    }
    else {
         return ( 
        <div> 
            {kanye.quote}
        </div> ); } 
    }
    
    export default Kanyes;