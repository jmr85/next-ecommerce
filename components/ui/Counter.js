"use client"
import { Button } from "./Button"

const Counter = ({counter, setCounter, max}) => {

    const increase = () => counter < max && setCounter(counter + 1)
    const decrease = () => counter > 1 && setCounter(counter - 1)

    return (
        <div className="flex items-center gap-3">
            <Button onClick={decrease} className="active:bg-blue-600">-</Button>
            <p>{counter}</p>
            <Button onClick={increase} className="active:bg-blue-600">+</Button>
        </div>
    )
}

export default Counter