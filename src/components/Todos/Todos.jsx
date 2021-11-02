import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter, Switch, Route, useParams } from 'react-router-dom'

const Todos = () => {
 const [loading, setLoading] = useState(false)
 const [todos, setTodos] = useState([])
 useEffect(() => {
   setLoading(true)
   fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
     setLoading(false)
     setTodos(json)
    })
    .catch(err => {
     setLoading(false)
    })
 }, [])

 if (loading) return <div> wait </div>

 return (
  <div>
    {todos.map((todo, index) => (
     <div>
       <Link to={`/${todo.id}`}> See more </Link>
       <h1>{todo.title}</h1>
       <p>Completed {todo.completed ? "Yes": "Noe"}</p>
     </div>
    ))}
  </div>
 )
}

const Todo = () => {
 const params = useParams()
 const [loading, setLoading] = useState(false)
 const [todo, setTodo] = useState([])

 useEffect(() => {
  setLoading(true)
  fetch('https://jsonplaceholder.typicode.com/todos/' + params.id)
  .then(response => response.json())
  .then(json => {
   setLoading(false)
   setTodo(json)
  })
  .catch(err => {
   setLoading(false)
  })
 }, [])

 if (loading) return <p> Loading... </p>

 return (
  <div>
    <h1>{todo.title}</h1>
  </div>
 )
}

const App = () => {
 return (
  <BrowserRouter>
   <Switch>
    <Route exact path="/">
      <Todos/>
    </Route>
    <Route exact  path="/:id">
     <Todo/>
    </Route>
   </Switch>
  </BrowserRouter>
 )
}

export default App;