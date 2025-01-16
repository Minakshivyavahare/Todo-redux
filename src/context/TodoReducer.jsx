const TodoReducer = (state, action) =>{

    switch(action.type){

        case "ADD_TODO" : 
              return {
                ...state,
                todos : [action.payload, ...state.todos]
              }
         
        case "DELETE_TODO":
            return{
                ...state,
                todos : state.todos.filter(item => item.id !== action.payload)
            }  
        
        case "EDIT_TODO":
            return{
                ...state,
                edit : {todos:action.payload, isEdit:true}
            }  
        case "UPDATE_TODO":
            return{
                ...state,
                todos : state.todos.map(item => item.id === action.payload.id ? action.payload : item)
            }      
        default:
            return state;
    }

}


export default TodoReducer