import React, { forwardRef, useContext, useState } from 'react'
import { ToDoContext } from '../App'


const InputForm =forwardRef( (props,ref) => {
    const[item,setItem]=useState('')
    const {listState,dispatch}=useContext(ToDoContext)
  return (
    <>
      <form 
onSubmit={(e)=>{
    e.preventDefault()
    dispatch({type:'ADD_ITEM',payload:{id:Date.now(),item}})
}}
      
      action="" className='max-w-md mx-auto bg-slate-200 rounded-lg flex justify-between items-center'>
<input onChange={(e)=>setItem(e.target.value)} value={item} ref={ref.inputRef}  className='focus:outline-0 border-0 px-4 py-2' type="text" placeholder='enter item to add' />
<button
 className='px-4 py-2 rounded-lg shadow-sm bg-black text-white ' type="submit">ADD</button>
</form>
<button 
onClick={()=>dispatch({type:'RESET'})}

// onClick={props.handleReset}
 className='px-4 py-2 rounded-lg shadow-sm bg-black text-white '>Reset</button>

    </>
  )
})

export default InputForm
