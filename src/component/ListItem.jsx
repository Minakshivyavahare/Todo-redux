import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const ListItem = ({todo}) => {

  const {dispatch} = useContext(TodoContext)

  const handleRemove = (id) => {
       dispatch({
        type: "DELETE_TODO",
        payload: id
       })
  }
  const handleEdit = (todo) => {
    dispatch({
      type: "EDIT_TODO",
      payload: todo
    })
  }
  return (
    <>
    <li className='list-group-item'>
        <p>{todo.id}</p>
        <h2>{todo.text}</h2>
        <span className='float-end'>
          <button className='btn btn-danger mx-2' onClick={() => handleRemove(todo.id)}>Delete</button>
          <button className='btn btn-primary' onClick={() => handleEdit(todo)}>Edit</button>
        </span>
      </li>
    </>
  )
}

export default ListItem