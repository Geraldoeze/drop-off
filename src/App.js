import React from "react";
import Bar from './Components/Bar'
import Map from './Components/Map'
import axios from 'axios'
import './App.css'

const api = axios.create({
       baseURL:  `https://mock-api.dev.lalamove.com/route`
     })

class App extends React.Component {
    constructor(){
        super();
        
   
        this.state = {
            origin: '',
            destination: ''
        }
        
    }
      pathHandler = (log) => {
         
        }
      
    

     newLocation = (item) =>{
        console.log(item.data.status)
        this.pathHandler(item.data.path)
         const repo =  item.data.status; 
         if(repo==="failure"){document.getElementById("kill").innerHTML = "Location not accessible by car";}
         else if(repo==="in progress"){document.getElementById("kill").innerHTML = "Loading in progress"}
         else if(repo==="success"){document.getElementById("kill").innerHTML = "total distance: 2000"} 
         else {document.getElementById("kill").innerHTML = "Error Refresh to Load"}
     }
    
    onInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
       
    }

    onSubmit = (e) => {
        console.log('click', this.state);
        e.preventDefault();
        api.post('/').then(res => {
            console.log(res.data.token);
        api.get(`/${res.data.token}`, {
            params: this.state })
            .then(response =>{this.newLocation(response);})
            .catch( () =>{document.getElementById("kill").innerHTML = "Error Refresh to Load" })    
          
      })
    
    }
    render() { 
      const demo = this.pathHandler
     
        return (
        <div className="App">
            <Bar onInputChange={this.onInputChange}
                onButtonSubmit={this.onSubmit}
                />
                
                   <Map pathHandler ={demo }
                   />
                
                
        </div>);
    }
}
 export default App;