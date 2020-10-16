import React,{useState} from "react";
import "./App.css";
import Form from './components/Form';
import TodoList from "./components/TodoList";

function App() {
  //Get the piece of input data what we need
  //inputText: actual Data
  //setInputText: funciton that allows you to change `inputText` data value
  const [inputText, setInputText] = useState(""); // Pass down setInputText to <Form />
  
  // Stores todos
  const [todos, setTodos] = useState([]); // This time we will use Array of object

  return (
    <div className="App">
      <header>
        <h1>Robert's Todo List</h1>
        {/**Check the inputText value 
        <h2>{inputText}</h2> */}
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText = {setInputText} inputText= {inputText}/>
      <TodoList />
    </div>
  )
}

export default App;
