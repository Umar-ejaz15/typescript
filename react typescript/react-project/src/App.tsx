import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import TodoContext from './context/todoContext';
import { useState } from 'react';
import type { Todo } from "./types/todoType";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onDelete = (id: number) => {
    setTodos(todos.filter(item => item.id !== id));
  };
  
  return (
    <main className="bg-zinc-900 h-screen w-screen flex flex-col  text-white">
      <h1 className="mx-auto font-bold text-5xl">Todo App</h1>
      <div className="flex flex-col justify-center items-center">
        <TodoContext.Provider value={{todos, setTodos, onDelete}}>
          <AddTodo />
          <TodoList />
        </TodoContext.Provider>
      </div>
    </main>
  )
}

export default App