import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, useParams } from 'react-router-dom';




function DogDetails({dogs}) {

    const {name} = useParams();
  
    
        

    const [showDog, setShowDog] = useState(name);
    console.log(showDog);

    const dogData = dogs.find(dog=>dog.name === name);

    useEffect( () =>{

    setShowDog(name);
}, [name])

    
    return(

            <div>
            <h1>Dog details for {dogData.name}:</h1>
            <h3>Age: {dogData.age}</h3>
            <ul>
            {dogData.facts.map(fact=>(<li>{fact}</li>))}
            </ul>
            <img src = {dogData.src}></img>
        </div>

    )

}

export default DogDetails