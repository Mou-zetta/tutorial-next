'use client'

import { useState } from "react"
import Button from "./Button"


const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = (type: string) => {
        if(type === 'increase') {
            setCount(count+1)
        } else {
            count > 0 &&  setCount(count-1)
        }
    }

    const increaseCount = () => {
        setCount(count+1)
    }

    const decreaseCount = () => {
      count > 0 &&  setCount(count-1)
    }


  return (
    <div className="flex flex-row items-center justify-center gap-5">
        <Button {...{text: '+', className: 'bg-green-700', handleClick, type: 'increase'}} />
        <div>{count}</div>
        <Button {...{text: '-',  className: 'bg-red-700', handleClick, type: 'decrease'}} />
    </div>
  )
}

export default Counter

