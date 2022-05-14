import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <h1 className="main-title">My Java Doc</h1>
        <div className='card-container'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
