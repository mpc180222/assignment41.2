import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Color({colors}){
    const navigate = useNavigate();
    const {color} = useParams();
    
    const check = colors.find(c=> c[0]===color);
    console.log(check)


    useEffect(() => {
        if(check === undefined){
            return(
                navigate("/colors")
            )
            
        }
    },[check])

    
    

return (

    <div style ={check && {backgroundColor: `${check[1]}`}}>
        <h1>This is {check && check[0]}</h1>

        <h2 style = {{color: 'white'}} onClick ={() => navigate("/colors")}>Go Back</h2>
    </div>

)


}

export default Color;