import { useState } from "react"

export const Calc = () => {
    const [first, setFirst] = useState()
    const [second,setSecond] = useState()
    const [res, setRes] = useState()

    const plus = () => {
        setRes(first+second)
    }
    const minus = () => {
        setRes(first-second)
    }
    const mnozh = () => {
        setRes(first*second)
    }
    const dill = () => {
        setRes(first/second)
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
            <input
            value={second}
            onChange={(e) => setSecond(+e.target.value)}
            ></input>
            <h2>=</h2>
            <h2>{res}</h2>
        </div>
    )
}

export const Counter = () => {
    const [result, setResult] = useState(0)
    const dodat = () => {
        setResult((old) => old+1)
    }
    const mins = () => {
        setResult((old) => old-1)
    }
    const reset = () => {
        setResult(0)
    }
    return (
        <div>
            <h2>{result}</h2>
            <button onClick={dodat}>+</button>
            <button onClick={mins}>-</button>
            <button onClick={reset}>*</button>
        </div>
    )
}

export const Person = () => {
    // const listItems = user.map((user) => user)
    
        const odn = {
        names:'sem',
        age:'28',
        index:'01',
    }
    
    const dva = {
        names:'seeem',
        age:'22',
        index:'02',
    }
    const tru = {
        names:'simm',
        age:'25',
        index:'03',
    }
    const chotur = {
        names:'kem',
        age:'33',
        index:'04',
    }
    // const user = [odn, dva, tru, chotur];
    return (
        <div> 
            {/* <div>{user.map((user) => (
                <div key={user.index}>
                    <h2>{user.names}</h2>
                    <h3>{user.age}</h3>
                </div>
            ))}</div> */}
            <div>
                <h2>{odn.names}</h2>
                <h3>{odn.age}</h3>
            </div>
            {/* <div>{dva}</div>
            <div>{tru}</div>
            <div>{chotur}</div> */}
        </div>
    )

}