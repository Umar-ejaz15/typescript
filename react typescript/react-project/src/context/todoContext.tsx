// context/todoContext.ts
import { createContext } from "react";
import type { TodoContextType } from "../types/TodoContextType";

const TodoContext = createContext<TodoContextType>({
  todo: [],
  setTodo: () => {},
   // default empty function
   onDelete: (id: number) => {
    return [];
   }
  
});

export default TodoContext;