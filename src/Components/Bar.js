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
        const { pickup, drop } =this.state
    return (  
        <div className="search">
            <h2>Location</h2>
            <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor="pick up" className="label"> Pick up</label>
                    <input
                       type="text" 
                       className="call" 
                       name="origin"
                       value= {pickup} 
                       onChange={this.changeHandler}/>
                    </div>
                    <div>
                    <label htmlFor="drop off" className="label">Drop off</label>
                    <input type="text" className="call" name="destination" value= {drop} onChange={this.changeHandler}/>
                </div>
                <div>
                    <button type="submit"  className="btn">Submit</button>
                    <button type="reset"className="btn">Reset</button>
                </div>

            </form>
      
            
        </div>
    )
    }
}
 
export default Bar;