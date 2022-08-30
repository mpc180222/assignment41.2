import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useLocation, BrowserRouter } from "react-router-dom";

function Colors({colors}) {

    // const { state } = useLocation();
    // console.log(state);
    // const userColor = useRef(['red', 'green', 'purple']);
    // if(state !== null) userColor.current = [state.colors, ...userColor.current];
    
    // const [colorChoices, setColorChoices] = useState(userColor.current)  
    console.log(colors)
    return(
        <div>
            <h1>Welcome to the color factory</h1>
            <Link to = "/colors/new">Add a color</Link>
            <h2>Please select a color</h2>
            <ul>
                {colors.map(c=> <Link to = {`/colors/${c[0]}`}>{c[0]}</Link>)}
            </ul>
            

        </div>

    )




}

export default Colors;