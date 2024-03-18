'use client'
import React from 'react'
import {useState} from 'react'
import Button from './Button'

const Counter = () => {
  const [counter, setCounter] = useState(1);  

  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)

  return (
    <div className="flex justify-center items-center gap-3">
        <Button onClick={increase}>+</Button>
        <p>{counter}</p>
        <Button onClick={decrease}>-</Button>
    </div>
  )
}

export default Counter