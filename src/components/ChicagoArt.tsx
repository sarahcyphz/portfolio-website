import { useState, useEffect } from "react";
import React from "react";

type Art = { 
    id: number;
    title: string; 
    image_id: string; 
}

function Paintings() {

const [artworks, setArtworks] = useState<Art[]>([]);  // array of artwork objects
const [error, setError] = useState<Error | null>(null);

useEffect (() => {
    
    fetch(`https://api.artic.edu/api/v1/artworks?limit=1`)
    .then((response) => response.json())
    .then((data) => setArtworks(data.data))              // set artworks with fetched data
    .catch((error) => setError(error))
}, []);

if (error) {
    return <div> {error.message} </div>;
}
else if (artworks.length === 0) {                 // if empty 
    return <div> loading </div>;
}
else {
     return ( 
        <div className='grid-child painting'>
            <img src={`https://www.artic.edu/iiif/2/${artworks[0].image_id}/full/843,/0/default.jpg`} width={350} height={250} alt={artworks[0].title} />            
            <div className="paintingTxt">{artworks[0].title}</div>                                                                                             
        </div>
        
     );} 
}

export default Paintings;