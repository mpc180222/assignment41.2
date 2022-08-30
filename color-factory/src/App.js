import React, { useState } from "react";
// import Nav from "./Nav";
import {Route, BrowserRouter, Routes, Navigate} from "react-router-dom";
import './App.css';
import Colors from './Colors';
import Color from './Color';
import AddColorForm from './AddColorForm';

// App.defaultProps = {colors: ['red', 'blue', 'green']};

function App() {

  const INITIAL_COLORS = [['red','#FF0000'], ['green', '#00FF00'], ['blue', '#0000FF']];

  const [colorOptions, setColorOptions] = useState(INITIAL_COLORS);

  const addNewColor = ([newColorName, newColorCode]) => {

    setColorOptions([[newColorName, newColorCode], ...colorOptions]);
  }


  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path ="/colors" element = {<Colors colors = {colorOptions}  />}></Route>
      <Route exact path = "/colors/:color" element = {<Color colors = {colorOptions} />}></Route>
      <Route exact path = "/colors/new" element = {<AddColorForm addNewColor = {addNewColor} />}></Route>
      <Route path = "*" element= {<Navigate to="/colors" replace />}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
