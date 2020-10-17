import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {

    //Events
    const deleteHandler =()=> {
        // In here we need to modify the state. We need SetTodos function because that's how we modify the state. We need to get that setTodos (from the App() so we need to pass down from App.js to here Todo.js)
        
        console.log(todo); // THis show thd todo object data what we clicked delete
        
        //Use filtering function
        //Comparing what we clicked on to match one from state. Filtering this state out trying to found out element that matches what we clicked on. If matches get rid of it.
        setTodos(todos.filter((el)=>el.id !== todo.id));

    }


  return (
    // Writhe JSX code for basic design
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick ={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
