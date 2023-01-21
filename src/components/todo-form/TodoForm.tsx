import React,{useState} from 'react';

export interface TodoFormProps {
    addTodo(todo:string):void
}

const TodoForm: React.FunctionComponent<TodoFormProps> = ({addTodo}) => {
    const [input, setInput] = useState('');
    
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        setInput(e.target.value);
    }
    const submitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
 
        addTodo(input);
        setInput("");
    }

    return (
        <>
        <form className='flex justify-between items-center gap-2' onSubmit={submitHandler}>
            <input className='bg-blue-900 py-2 outline-none p-2 placeholder:text-gray-400 md:placeholder:text-2xl md:text-3xl md:py-6 md:w-96' placeholder='Add Todo...' type="text" onChange={changeHandler} />
            <button className="py-1 px-3 bg-purple-400 rounded-full md:py-5 md:px-7" type='submit'>+</button>
        </form>
        </>
     );
}

export default TodoForm;