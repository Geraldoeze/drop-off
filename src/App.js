import React, { Component } from 'react';
import './App.css';
import Bar from './Components/Bar';
import Maps from './Components/Map';



class App extends Component {
 

  
  render() {
    return (
       <div className="App">  
         <Bar />
         <Maps />
       </div>
    )
  }
}
 
export default App;

