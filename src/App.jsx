
import { createContext, useReducer, useRef, useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import InputForm from './components/InputForm'
import ListItems from './components/ListItems'
export const ToDoContext = createContext()
function App() {
  const inputRef = useRef(null)

  
  const initialState={
    listItems:[]
  }
const reducerFunction=(state,action)=>{
  switch(action.type){
    case 'ADD_ITEM' : 
    return {
       listItems:[...state.listItems,action.payload]
    }

    case 'DELETE_ITEM' : 
    const newState=  state.listItems.filter(item=>{
      return item.id!==action.payload
    })
    return {...state,listItems:newState}
   

    case 'RESET' :
      return initialState
  }

}

const [listState,dispatch]=useReducer(reducerFunction,initialState)
console.log(listState)

return (
  
  <ToDoContext.Provider value={{listState,dispatch}}>
<h1 className='text-center font-bold text-3xl my-3'>To Do</h1>
<InputForm  ref={inputRef}/>
{/* to do listing section */}
<ListItems
 listItems={listState?.listItems}
  // handleDelete={handleDelete}
 />
</ToDoContext.Provider>
   
  )
}

export default App
