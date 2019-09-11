import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Circles from './Circles/Circles'
import Points from './Points/Points'
import Control from './Control/Control'

function App() {
  return (
    <div className="App">
      <h5 className="Header">Reaktiopeli</h5>
      <Circles />
      <Points />
      <Control />
    </div>
  );
}

export default App;
