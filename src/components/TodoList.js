import React from "react";
import Todo from "./Todo";

//This TodoList going to be parent of `Todo` compoent
const TodoList = ({ todos, setTodos, filteredTodos}) => {
  //console.log(todos);
  // For the array of object, we can use map function. Rendering each of object in the Todo component
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/**Use a Javascript Map function for each compoenet and pass each of object to the Todo Component */}
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos} todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
