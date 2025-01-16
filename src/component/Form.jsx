import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/TodoContext'

const Form = () => {
  const [text, setText] = useState('')
 
  const {dispatch, edit} = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    !edit.isEdit ?
    dispatch({
      type: "ADD_TODO",
      payload: {id: crypto.randomUUID(), text}
    })
    :
    dispatch({
      type : "UPDATE_TODO",
      payload: {id: edit.todos.id, text}
    })

    setText("")
  }

  useEffect(() =>{
     setText(edit.todos.text)
  },[edit])

  return (
   <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter Text' 
      onChange={(e) => setText(e.target.value)}
      value={text}
      className='form-control rounded-0' />

      <button type='submit' className='btn btn-success my-2 w-100'>Save</button>
    </form>
   </>
  )
}

export default Form