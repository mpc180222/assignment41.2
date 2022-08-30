import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function AddColorForm({addNewColor}){
    const navigate = useNavigate();
    const INITIAL_STATE = {
        color: "",
        colorName: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    
    function handleChange(evt){
        const {name, value} = evt.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        addNewColor([formData.colorName, formData.color]);
        // navigate('/colors', { state: {colors: `${formData.colorName}`} })
        navigate('/colors')
        
    }


    return(
        <div>
            <h1>Add a new color here.</h1>
            <form onSubmit = {handleSubmit}>
                <input type= "color" name = "color" onChange = {handleChange}></input>
                <input type = "text" name = "colorName" onChange = {handleChange} placeholder = "Name this color"></input>
                <button>Submit Color</button>
            </form>
        </div>
    )

    
}

export default AddColorForm;