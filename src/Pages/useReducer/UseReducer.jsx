// TODO APP

import {useReducer, useState} from 'react'

const INITIAL_STATE = []


const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD' :
            return action.payload === '' ? state : [...state, action.payload]
        case 'DELETE' :
            return state.filter((item, index) => {
                return index !== action.id
            })
        default:
            return state
    }
}


const UseReducer = () => {
    const [item, setItem] = useState('')

    const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE)

    const handleChange = (e) => {
        let todo = e.target.value
       setItem(todo)
    }

    const addTodo = () => {
         dispatch({type: 'ADD', payload: item})
         setItem('')
    }

    const deleteTodo = (index) => {
        dispatch({type: 'DELETE', id: index})
    }
    

  return (
    <div>
        <input type="text" value={item} onChange={handleChange}/>
        <button onClick={addTodo}> ADD TODO</button>
        <ul>
            {
                state.map((item, index) => 
                    {
                  return   <li key={index}>{item}  <button onClick={() => deleteTodo(index)}>DELETE</button></li>
                }
                )
            }
        </ul>

    </div>
  )
}

export default UseReducer