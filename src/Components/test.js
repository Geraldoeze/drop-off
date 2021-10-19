


const Test = ({ onInputChange, onButtonSubmit }) => {
                  
                 
    return ( 
        <div>
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
               { <div className="res">
                    <p>Total distance:</p>
                    <p>Total time:</p>
                </div>}
                <div>
                    <button type="submit"  
                        onClick={onButtonSubmit}
                        className="btn" >Submit</button>
                    <button type="reset"className="btn" >Reset</button>
                </div>
            </form>
      
        </div>
     );
}
 
export default Test;