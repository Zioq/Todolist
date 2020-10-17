import React from 'react';

const Form = ({setInputText, todos, setTodos,inputText}) => { 
    // intead of using (props) in parameter use this way -> ({setInputText}) we don't have to call props.setInputText
    //Here I can write javascript code and function 
    //Tip: name for function make it finish its name with handler
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        //props.setInputText(e.target.value);
        setInputText(e.target.value);
    };
    //When submiited, Let's make a object data for input data
    const submitTodoHandler = (e) => {
        e.preventDefault();
        console.log("you click submit");
        //create object
        setTodos([
            ...todos,{text:inputText, completed: false, id: Math.random() *1000} // ... =>this code means if there is an todos in array, just spread it. and after create new object consist of `text` and `completed`
        ]);
        setInputText(""); // set inputText to empty after submit (do not make stay the data in the state of InputText after submiited) 

    }
  return (
      // To make clear in the inputText, make a value={inpuText}. Because when the submitted, we code inputText's state make "". So we can get that empty string right away and setting it in the input value
    <form>
      <input value={inputText} onChange ={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
