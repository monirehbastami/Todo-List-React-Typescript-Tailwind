import React,{useState} from 'react';
import './App.css';
import TodoForm from './components/todo-form/TodoForm';
import {ITodo} from './components/interface';
import TodoList from './components/todo-list/TodoList';


function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const addTodo = (todo:string):void=>{
    if(!todo){
      alert('Insert Todo!');
      return
    }
    const data:ITodo={
      id: todoList.length < 1 ? 1 : todoList[todoList.length -1].id+1,
      todo:todo,
      completed:false,
    }
    setTodoList([...todoList,data])
    console.log(todoList)
  }

  const completeTodo = (id: number): void => {
    setTodoList(
      todoList.map(
        (todo: ITodo): ITodo =>
          todo.id === id
            ? Object.assign(todo, { completed: true }) && todo
            : todo
      )
    );
  };

  const deleteTodo = (id:number):void=>{
    setTodoList(
      todoList.filter(
        (todo:ITodo):ITodo | null => todo.id !== id ? todo: null
      )
    );
  }

  return (
    <div className='flex w-full justify-center items-center w-50 h-50 flex-col gap-4 text-white'>
      <div className='p-10 text-3xl'>What's up, Momo!</div>
      
      <TodoForm addTodo={addTodo}/>
      <div className='font-mono text-xs font-thin'>TODAY'S TASKS</div>
      {
        todoList.map((todo:ITodo,key:number)=>(
          <TodoList todo={todo} key={key} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        ))
      }
    </div>
  );
}

export default App;
