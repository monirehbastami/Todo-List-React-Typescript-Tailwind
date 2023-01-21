import React from 'react';
import { ITodo } from '../interface';
import { AiFillMinusCircle } from "react-icons/ai";


export interface TodoListProps {
    todo:ITodo;
    key:number;
    completeTodo(id:number):void;
    deleteTodo:(id:number)=> void;
}

const TodoList: React.FunctionComponent<TodoListProps> = ({todo,key,completeTodo,deleteTodo}) => {
    const todoCompleted = ():void=>{
       // alert('sdf')
        if(!todo.completed){
            completeTodo(todo.id)
        }
    }
    
    const todoDelete =():void=>{
        deleteTodo(todo.id)
    }

    return ( 
        <>
        <div className='bg-mlightblue py-2 w-72 flex flex-row justify-start text-lg items-baseline gap-3 md:placeholder:text-2xl md:text-3xl md:py-6 md:w-7/12' key={key}>
        {todo.completed ? (
                <div className='mx-2 text-pink-400 md:text-4xl md:mx-4' onClick={todoDelete}><AiFillMinusCircle  /></div>
                
                ): (
                <div onClick={todoCompleted}className='rounded-full ring-2 ring-mpink mx-2 w-4 h-4  md:w-8 md:h-8 md:mx-4' ></div>
            
                )}
            <h1> {todo.completed ? (
                <span style={{ textDecorationLine: "line-through" }}>
                    {todo.todo}
                </span>
                ) : (
                todo.todo
                )                
                } 
            </h1>
                
        </div>
        </> 
    );
}

export default TodoList;