import React, { useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean,
}

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>()
  const [isInputShown, setIsInputShown] = useState<boolean>(false)
  const [todosList, setTodosList] = useState<Todo[]>([
  
    {
      id: 0,
      title: "Clean room",
      isCompleted: false,
    },
    {
      id: 1,
      title: "Go to the gym",
      isCompleted: false,
    },
    {
      id: 2,
      title: "learn javascript",
      isCompleted: false,
    },
  ]);
  const handleDeleteToDo = (id:number) => {
    const filteredTodos = todosList.filter((todo)=> {
      if(todo.id == id){
        return false
      }
      return true
    })
    setTodosList(filteredTodos)
  }

const handleClickedTodo = (id:number) => {
console.log(id)
setTodosList(todosList.map((todo)=> {
  if(todo.id === id) {
    return {
      id: todo.id,
      title: todo.title,
      isCompleted: !todo.isCompleted
    }
  }
  return todo;
}))
  }

  return (
    <div id="container" className="App">
      <h1>
        To-Do List
        <i className="fa fa-toggle-on" id="kopce" aria-hidden="true" onClick={()=> {
  setIsInputShown(!isInputShown)
  console.log(isInputShown)
        }}></i>
      </h1>
      
      <input onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>)=> {
        if(event.key == `Enter`){
          console.log(event)
          setTodosList([
            ...todosList,
            {
              id: new Date().valueOf(),
              // @ts-ignore
              title: event.target.value,
              isCompleted: false
            }
          ])
          setInputValue("")

        }
      }} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {
        setInputValue(event.target.value)
      }} value={inputValue}  type="text" placeholder="Add New Todo" className={isInputShown? `hideInput`: ''}/>
      <ul>
        {todosList.map((todo)=> {
          return (
        <li className={todo.isCompleted?`el completed`:`el`} key={todo.id} onClick={()=> {
          handleClickedTodo(todo.id)
        }}>
          <span className="trash" onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>)=> {
              console.log(event.target)
              event.stopPropagation()
              handleDeleteToDo(todo.id)
            }}>
            <i className="fa fa-trash" ></i>
          </span>
        {todo.title}
        </li>
          )
        })}
      </ul>
    </div>
  );
};

export default App;
