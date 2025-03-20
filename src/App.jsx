
import { useRef, useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import InputForm from './components/InputForm'
import ListItems from './components/ListItems'
function App() {
  const inputRef = useRef(null)
  
  const[listItems,setListItems]=useState([])
const[item,setItem]=useState('')

const handleSubmit=(e)=>{
  e.preventDefault()
  setItem('')
  setListItems((prevItems)=>[...prevItems,item])
  inputRef.current.focus()



}
const handleDelete=(item)=>{
  
  setListItems((prevItems)=>{
    return prevItems.filter(i=>i!=item)
  })
}
const handleReset = ()=>{
  setListItems([])
  inputRef.current.focus()
}
  return (

<>
<h1 className='text-center font-bold text-3xl my-3'>To Do</h1>
<InputForm handleReset={handleReset} handleSubmit={handleSubmit} item={item} setItem={setItem} ref={inputRef}/>
{/* to do listing section */}
<ListItems listItems={listItems} handleDelete={handleDelete}/>
</>
   
  )
}

export default App
