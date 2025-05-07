import React, {
  useContext,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react"
import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import TodoContext from "../context/todoContext"
import type { Todo } from "../types/todoType"

const AddTodo = () => {
  const { todo: todos, setTodo } = useContext(TodoContext)

  const [current, setCurrent] = useState<Omit<Todo, "id">>({
    heading: "",
    description: "",
  })

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrent({
      ...current,
      [e.target.name]: e.target.value,
    })
  }

  const onSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // create a new Todo with a unique id
    const newTodo: Todo = {
      ...current,
      id: Date.now(),
    }

    // never mutate—always replace with a new array
    setTodo([...todos, newTodo])

    // clear inputs
    setCurrent({ heading: "", description: "" })
  }

  return (
    <form onSubmit={onSave} className="flex gap-2 flex-col w-2/3">
      <div>
        <Label htmlFor="heading">Heading</Label>
        <Input
          id="heading"
          name="heading"
          placeholder="Enter todo heading"
          type="text"
          value={current.heading}
          onChange={onInputChange}
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          name="description"
          placeholder="Enter todo description"
          type="text"
          value={current.description}
          onChange={onInputChange}
        />
      </div>
      <Button
        variant="destructive"
        className="w-fit mx-auto cursor-pointer px-10"
        type="submit"
      >
        Add Todo
      </Button>
    </form>
  )
}

export default AddTodo
