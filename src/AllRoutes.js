import React from "react";
import { Route, Switch, Redirect, useParams, Routes } from "react-router-dom";
import DogList from './DogList';
import DogDetails from './DogDetails';

function AllRoutes({dogs}) {

    return(
        <Switch>
<Route exact path="/dogs" >
<DogList dogs = {dogs} /> 
</Route>
<Route exact path="/dogs/:name" >
<DogDetails dogs = {dogs} /> 
</Route>
<Redirect to="/dogs" />
</Switch>
)



}

export default AllRoutes;