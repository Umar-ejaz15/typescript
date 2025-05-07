import  { useContext } from "react"
import TodoContext from "../context/todoContext"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Delete } from "lucide-react"

const TodoList = () => {
  const { todo: todos,onDelete } = useContext(TodoContext)

  return (
    <div className="container mt-4">
      <div className="row">
        {todos.map((item, index) => (
          <Card className="col-md-4 mb-3" key={item.id ?? index}>
            <div className="card hover:shadow-lg transition-shadow duration-300 rounded-lg border border-gray-200">
              <div className="card-body p-4">
                <h5 className="card-title text-xl font-semibold mb-2 text-gray-800">
                  {item.heading}
                </h5>
                <p className="card-text text-gray-600">{item.description}</p>
              </div>
            </div>
            <Button onClick={() => onDelete(item.id)} className="w-fit " >
                <Delete />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TodoList