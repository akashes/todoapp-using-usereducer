import React, { forwardRef } from 'react'

const InputForm =forwardRef( (props,ref) => {
  return (
    <>
      <form onSubmit={props.handleSubmit} action="" className='max-w-md mx-auto bg-slate-200 rounded-lg flex justify-between items-center'>
<input ref={ref.inputRef} onChange={(e)=>props.setItem(e.target.value)} value={props.item} className='focus:outline-0 border-0 px-4 py-2' type="text" placeholder='enter item to add' />
<button className='px-4 py-2 rounded-lg shadow-sm bg-black text-white ' type="submit">ADD</button>
</form>
<button onClick={props.handleReset} className='px-4 py-2 rounded-lg shadow-sm bg-black text-white '>Reset</button>

    </>
  )
})

export default InputForm
