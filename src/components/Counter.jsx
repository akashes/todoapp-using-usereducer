import React, { useContext } from 'react'
import Button from './Button'
import { CountContext } from '../context/CountContext'
const Counter = () => {
    const{count}=useContext(CountContext)
    console.log(count)
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
    <h1>{count}</h1>
    <div>
     <Button type='increment' payload={2} content='increment' />
     <Button type='decrement' payload={5} content='decrement' />
     <Button type='reset' content='reset'></Button>
    </div>
  </div>
  )
}

export default Counter
