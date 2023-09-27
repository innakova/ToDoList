import { useState } from "react"

export const Calc = () => {
    const [firstN, setFirstN] = useState()
    const [secondN, setSecondN] = useState()
    const [res, setRes] = useState()
    const plus = () => {
        setRes(firstN + secondN)
    }
    const minus = () => {
        setRes(firstN - secondN)
    }
    const mhozh = () => {
        setRes(firstN * secondN)
    }
    const dill = () => {
        setRes(firstN / secondN)
    }

    return (
    <div>
        <input value={firstN} onChange={(e) => setFirstN(+e.target.value)}></input>
        <h2 onClick={plus}>+</h2>
        <h2 onClick={minus}>-</h2>
        <h2 onClick={mhozh}>*</h2>
        <h2 onClick={dill}>/</h2>
        <input value={secondN} onChange={(e) => setSecondN(+e.target.value)}></input>
        <h2>=</h2>
        <h2>{res}</h2>
    </div>        
    )
}