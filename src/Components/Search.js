import React from 'react'
import './Search.css'


const SearchBar = () => {
    return(
        <div className="Search">
            <h1>Location </h1>
            <div> 
                <h3>Pick-up</h3>
              <input className="pick" />
            </div>
            <div>
                <h3>Drop-off</h3>
            <input className="drop-off" />
            </div>
        </div>
    )
}


export default SearchBar;