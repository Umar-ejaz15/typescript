import type { Todo } from "./todoType";

export interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  onDelete: (id: number) => void;
}