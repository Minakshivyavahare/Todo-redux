import React from 'react'
import Navbar from './component/Navbar'
import Form from './component/Form'
import ListGroup from './component/ListGroup'
import { TodoProvider } from './context/TodoContext'

const App = () => {
  return (
   <TodoProvider>
   <Navbar/>
   <div className="container my-5">
    <Form/>
    <ListGroup/>
   </div>
   </TodoProvider>
  )
}

export default App