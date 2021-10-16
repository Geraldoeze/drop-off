import React from 'react'
import './Search.css'


const SearchBar = () => {
    return(
        <div className="Search">
            <h1>Location </h1>
            <div className="first"> 
                <h3>Pick-up</h3>
              <input className="pick" />
            </div>
            <div className="second">
                <h3>Drop-off</h3>
            <input className="drop-off" />
            </div>
            <div className="click">
                <button className="submit"> Submit</button>
                <button className="submit" > Reset </button>
            </div>
        </div>
    )
}


export default SearchBar;