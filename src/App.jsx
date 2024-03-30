import React, { useState } from 'react'
import {useSelector} from 'react-redux'

const App = () => {
  
  const {ProductReducer,UserReducer} = useSelector(state=>state)
  const {product} = ProductReducer
  const {users} = UserReducer
  console.log(product,users)
  return (
    <div className='w-full p-10'>
      <div className='w-full bg-red-200 rounded p-10'>
        <h1 className='font-bold text-2xl'>hiii</h1>
        <div className='w-full flex-col flex gap-1 mt-5'>
          <span className='font-semibold text-sm text-zinc-700'>sdfgh</span>
          
        </div>
      </div>
    </div>
  )
}

export default App
