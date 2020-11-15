import React from 'react';
 const Addtodo =(props)=>{
 
    return(
        <div className="center">
         <input placeholder="Add todo" onChange={props.changing}/> 
         <button className="btn" onClick={props.add}>add</button><br/>  
        </div>
    )
}
export default Addtodo;