import { useEffect, useState } from 'react'
import axios from 'axios'


function useMe(n) {
  const [todos, setTodos] = useState([])

  const [loading,setLoading] = useState(true)

  useEffect(() => {
   const value =  setInterval(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        setTodos([res.data]);
        setLoading(false)
      })
    }, n * 1000)
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        setTodos([res.data]);
        setLoading(false)
      })
    return () => { // the way to stop the interval.
      clearInterval(value)
    }
  }, [n])
  return {todos, loading};
}
function Customhooks() {
  const { todos, loading } = useMe(5)
  if (loading) {
    return <div>Loading......</div>
  }
  return (
    <>
      {todos.map(todo => <Track key={todo.id} todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.id}
    <br />
    {todo.title}
    <br />
  </div>
}

export default Customhooks

// Q. What are custom hooks? 
// Ans. Hooks are that you create yourself, so other people can use it are called custom hooks.

// A custom hook is effectively a function, but with the following properties -
// 1, Uses another hook internally.
// 2. Stare with the use

//!1. Data fetching hook => Data fetching hooks can be used to encapsulate all the logic to fetch the data from your backend
// We just created a different component which is just have the whole logic of the todos component and then rendering it to the main component.