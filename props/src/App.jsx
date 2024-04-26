import { useState } from 'react'
import './App.css'
import Demo from './Demo'

function App() {
 const todo = [ 
  {id : 1, task : "reading"},
  {id : 2, task : "writting"},
  {id : 3, task : "speaking"},
  {id : 4, task : "playing"}
 ];

 const users = [
  {id :1, name : "Khushbu", city : "Surat", age : 21,},
  {id :1, name : "Satish", city : "Vapi", age : 25,},
  {id :1, name : "Vidhi", city : "Amreli", age : 20,},
  {id :1, name : "Hit", city : "Rajkot", age : 17,},
 ];

  return (
   <Demo todoList = {todo} UserList ={users} />
  )
}

export default App;
