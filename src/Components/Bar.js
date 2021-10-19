import './Search.css'

const Bar = ({ onInputChange, onButtonSubmit }) => {
                  
                 
    return ( 
        <div className="search">
           <form >
                <div>
                    <label htmlFor="starting" className="label"> Starting location</label>
                    <input
                       type="text" 
                       className="call" 
                       name="origin"
                        onChange={onInputChange}
                         
                        />
                    </div>
                    <div>
                    <label htmlFor="drop off" className="label">Drop-off point</label>
                    <input type="text"
                     className="call"
                     onChange={onInputChange}
                      name="destination" 
                       />
                </div>
                <div id="kill" className="res">
                    <p id="sell"></p>
                </div>
                <div>
                    <button type="submit"  
                        onClick={onButtonSubmit}
                        className="btn" >Submit</button>
                    <button type="reset"
                        className="btn" >Reset</button>
                </div>
            </form>
      
        </div>
     );
}
 
export default Bar;