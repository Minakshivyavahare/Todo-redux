import React, { useContext } from 'react'
import ListItem from './ListItem'
import TodoContext from '../context/TodoContext'

const ListGroup = () => {

  const {todos} = useContext(TodoContext)
 
  

  return (
   <>
   <ul className='list-group'>
    {
      todos.map((todo)=> {
        return (
          <ListItem  key={todo.id} todo={todo}/>
        )
      })
    }
     
    </ul>
   </>
  )
}

export default ListGroup