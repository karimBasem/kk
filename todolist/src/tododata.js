import React, { Fragment } from 'react';
 const Tododata =(props)=>{
     const deleteTodo = props.delete;
     const todo = props.todos;
     const items =todo.map((item,index)=>{
     
        return(
            <Fragment key={index}>
                
            <li>{item.text}</li><button onClick={()=>{deleteTodo(item.text)}}>delete</button><br/><hr/>
            </Fragment>  
           
        )

     });
    return(
        <div>{items}
        </div>
    )
}
export default Tododata;