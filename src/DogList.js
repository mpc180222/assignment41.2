import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';


function DogList({dogs}) {
  
    
    return(
            <div>
            <h1>Dog List</h1>
            <ul>
             {dogs.map(dog => (<li>
                <img src = {dog.src}></img>
                <Link exact to = {`/dogs/${dog.name}`} >{dog.name}</Link></li>
    
            )  )}

            

             
            
        </ul>
        </div>

    )

}

export default DogList