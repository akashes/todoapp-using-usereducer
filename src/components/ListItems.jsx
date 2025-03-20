import React from 'react'

const ListItems = ({listItems,handleDelete}) => {
  return (
    <div>
  <ul className='max-w-md mx-auto bg-gray-200  my-5'> 
  {
    listItems.length>0 && listItems.map((item,i)=>{
      return(
        <li className='flex justify-between px-2 py-2 font-semibold text-lg ' key={i}>{item} <span onClick={()=>handleDelete(item)}>×</span></li>
        
      )
    })
  }
  </ul>
</div>
  )
}

export default ListItems
