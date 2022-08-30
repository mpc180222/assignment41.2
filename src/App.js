import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import dogData from './dogData';
import DogList from './DogList';
import Nav from './Nav';
import AllRoutes from './AllRoutes';
App.defaultProps = dogData;

function App() {

  return (
    <BrowserRouter>
   <Nav names = {
    App.defaultProps.dogs.map(dog => (dog.name)) }></Nav>
   <AllRoutes dogs = {App.defaultProps.dogs}></AllRoutes>
   </BrowserRouter>

  );
}

export default App;
