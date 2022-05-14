import React from 'react';
import Card from "./components/Card/Card";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <h1>My Java Doc</h1>
      <Card />
    </div>
  );
}

export default App;
