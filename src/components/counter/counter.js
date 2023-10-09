import { useState } from "react"

export const Calc = () => {
    const [first, setFirst]  = useState()
    const [second, setSecond]  = useState()
    const [result, setResult]  = useState()
    const plus = () => {
        setResult(first + second)
    }
    const minus = () => {
        setResult(first - second)
    }
    const mnozh = () => {
        setResult(first * second)
    }
    const dill = () => {
        setResult(first / second)
    }
    const reset = () => {
        setResult(0)
    }
    return (
        <div>
            <input
            value={first}
            onChange={(e) => setFirst(+e.target.value)}
            ></input>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={mnozh}>*</button>
            <button onClick={dill}>/</button>
            <button onClick={reset}>@</button>
            <input
            value={second}
            onChange={(e) => setSecond(+e.target.value)}
            ></input>
            <h2>=</h2>
            <h2>{result}</h2>
        </div>
    )
}

export const Counter = () => {
    const [res, setRes] = useState(0)
    const dod = () => {
        setRes((old) => old + 1)
    }
    const min = () => {
        setRes((old) => old - 1)
    }
    const reseat = () => {
        setRes(0)
    }
    return (
        <div>
            <h2>{res}</h2>
            <button onClick={dod}>+</button>
            <button onClick={min}>-</button>
            <button onClick={reseat}>*</button>
        </div>
    )
}