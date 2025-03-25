import React, { useContext } from 'react'
import { ToDoContext } from '../App'

const ListItems = ({listItems}) => {
  const{listState,dispatch}=useContext(ToDoContext)
  console.log(listItems)
  return (
    <div>
  <ul className='max-w-md mx-auto w-[100%] bg-gray-200  my-5'> 
  {
    listItems.length>0 && listItems.map(({id,item},i)=>{
      return(
        <li className='flex justify-between px-2 py-2 font-semibold text-lg ' key={i}>{item} <span className='cursor-pointer' onClick={()=>{
          dispatch({type:'DELETE_ITEM',payload:id})
        }}>×</span></li>
        
      )
    })
  }
  </ul>
</div>
  )
}

export default ListItems
