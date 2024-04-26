import { Component } from "react";

class Demo extends Component{
    constructor(props){
        super();
        this.state ={
            todo: props.todoList,
            user :props.UserList,
        }
    }
    render(){
        return(
           <div>
            <h1>Todo List</h1>
            {
            
            this.state.todo.map((val) => {
                    return(
                        <div >
                            <h1>{val.id}</h1>
                            <h2>{val.task}</h2>
                         </div>
                    );
                })
            }

            <h1>User List</h1>
            <table border="1">
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>City</td>
                        <td>Age</td>
                    </tr>
           
           {
            this.state.user.map((val) => {
                return(
                    
                   <tbody >
                    <tr>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.city}</td>
                        <td>{val.age}</td>
                    </tr>
                   </tbody>
               
                )
            })
           }
            </table>
            {/* {
                this.state.user.map((item) => {
                    return(
                       <>

                        <h3>{`Id :- ${item.id}`}</h3>
                        <h3>{`Name :- ${item.name}`}</h3>
                        <h3>{`City :- ${item.city}`}</h3>
                        <h3>{`Age :- ${item.age}`}</h3>
                       </>
                    )
                })
            } */}
            
           </div>
        )
    }
}
export default Demo;