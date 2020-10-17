import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  /*[STATES] */
  //Get the piece of input data what we need
  //inputText: actual Data
  //setInputText: funciton that allows you to change `inputText` data value
  const [inputText, setInputText] = useState(""); // Pass down setInputText to <Form />

  // Stores todos
  const [todos, setTodos] = useState([]); // This time we will use Array of object

  // Filter todos: All, Completed, UnCompleted
  const [status, setStatus] = useState("all"); // set the default state of status 'all'

  // Set the filter state
  const [filteredTodos, SetFilterTodos] = useState([]); // What the this things gonna do is that when the todos are completed, their 3th State(about Status (All,Complete,Uncompleted) ) will be move into this 4rd State that we're going to render out in the end.

  //RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []); // use [] as second parameter because we wnat to only runs once.

  // USE EFFECT
  // first argument is consolelog funciton and second argugment array.
  // this array function is going to run only once when the compoent is first rendered
  // Here is the power of useEffect: you can re-run this function if you want by adding a value in the second array arguement. For example every time we hit submit you want to run the this function again. In this case I want to evety time I add a new todo this useEffect runs. this function will be run every time todo's value changes
  // We can add mutiple value in second parameter
  useEffect(() => {
    //console.log('Use Effect run');
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch (
      status // this status is 3rd State
    ) {
      case "completed":
        //Set filters todos. Take the todos from 2nd State and move to the 4rd State based on the status State
        SetFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        SetFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        SetFilterTodos(todos);
        break;
    }
  };

  // Save to Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Robert's Todo List</h1>
        {/**Check the inputText value 
        <h2>{inputText}</h2> */}
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      {/** Passing down the todos data */}
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
