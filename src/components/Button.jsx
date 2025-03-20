import React, { useContext } from 'react'
import { CountContext } from '../context/CountContext'

const Button = ({type,payload,content}) => {
    const{dispatch}=useContext(CountContext)
  return (
    <button onClick={()=>dispatch({type,payload})} className='px-4 py-2 bg-slate-400 rounded m-2'>{content}</button>

  )
}

export default Button
