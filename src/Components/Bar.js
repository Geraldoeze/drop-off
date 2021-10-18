import React, { Component } from "react";
import './Search.css'

class Bar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            origin: "",
            destination: ""
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
    }

 
    render(){
            const {pickup, drop} = this.state
    return (  
        <div className="search">
            <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor="starting" className="label"> Starting location</label>
                    <input
                       type="text" 
                       className="call" 
                       name="origin"
                       value= {pickup} 
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                    <label htmlFor="drop off" className="label">Drop-off point</label>
                    <input type="text"
                     className="call"
                     value={drop}
                      name="destination" 
                       onChange={this.changeHandler}/>
                </div>
               { <div className="res">
                    <p>Total distance:</p>
                    <p>Total time:</p>
                </div>}
                <div>
                    <button type="submit"  className="btn" >Submit</button>
                    <button type="reset"className="btn" >Reset</button>
                </div>
            </form>
      
            
        </div>
    )
    }
}
 
export default Bar;