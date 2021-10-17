import React, { Component } from 'react';
import './App.css';
import Bar from './Components/Bar';
import Map from './Components/Map';



class App extends Component {

 
  render() {
    return (
       <div className="App">  
         <Bar />
         <Map />
       </div>
    )
  }
}
 
export default App;



