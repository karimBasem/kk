import React, {Component} from 'react';
import './App.css';
import Tododata from './tododata'
import Addtodo from './addtodo'
class App extends  Component{
  state ={
    newdata :"",
    todos :[
      {text :"hey ",age:9,},
      {text :"nooooo "},
      {text :"ok "},
      {text :"well done"}
    ]
  }
  deleteTodo = (index) =>{
   let done = [...this.state.todos];
   done= done.filter((p)=>{
     return(
      p.text !== index)
   })
   this.setState({
     todos : done
   })
  }
 change =(e) =>{
    const add = e.target.value;
    this.setState({
      newdata : add
    })
console.log(add)
 }
 addTodo =() =>{
       const added = [...this.state.todos];
       added.push({
         text : this.state.newdata
       })
       this.setState({
         todos: added
         
       })

 }
  render(){
    return(
      <div className="parent">
       <ul className="nav">
        <Tododata todos={this.state.todos} delete={this.deleteTodo}/>
       </ul>
       <Addtodo changing={this.change} add={this.addTodo}/>
      </div>
    )
  }
}

export default App;
