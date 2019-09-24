import React from 'react';
import './App.css';

//Templates
import Header from './components/Templates/Header';
//Grids
import SimpleGrid from './components/Grid/Simple';
import CenterGrid from "./components/Grid/Center";
//Forms
import LoginForm from './components/Forms/Login';
//Nav
import AppBarSimple from './components/Nav/AppBarSimple';
//Expander
import Expander from './components/Expanders/Expander';

function App() {
  return (
    <div className="App">
      <Header title="Grids" />
      <SimpleGrid />
      <CenterGrid />
      <Header title="Login Form" />
      <LoginForm />
      <Header title="Nav" />
      <AppBarSimple />
      <Header title="Expanders" />
      <Expander />
    </div>
  );
}

export default App;
