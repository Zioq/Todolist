import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {
    // In here we need to modify the state. We need SetTodos function because that's how we modify the state. We need to get that setTodos (from the App() so we need to pass down from App.js to here Todo.js)

    console.log(todo); // THis show thd todo object data what we clicked delete

    //Use filtering function
    //Comparing what we clicked on to match one from state. Filtering this state out trying to found out element that matches what we clicked on. If matches get rid of it.
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    //maping over state
    setTodos(
      todos.map((item) => {
        //Comparing what I clicked
        if (item.id === todo.id) {
          // return object
          return {
            // pass in whatever property that item already had
            // In the array object change the completed state from false to true
            // ... means add all other properties and just mofify it like ,(comma)  after code
            ...item,completed: !item.completed,
          };
        }
        return item;
      })
    );
  }; 

  return (
    // Writhe JSX code for basic design
    <div className="todo">
        {/**Make a toggle for modify class name using a true /false syntax (To use javascript and css use a backslash )  Based on the state we can toggle complete on and off*/}
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
