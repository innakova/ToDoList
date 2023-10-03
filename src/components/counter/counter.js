import { useEffect, useState } from "react"

export const Counter = () => {
    const [result, setResult] = useState(0)
    const [isCounting, setIsCounting] = useState(false)
    const minus = () => {
        setResult((old) => old - 1)
    }
    const plus = () => {
        setResult((old) => old + 1)
    }
    const reset = () => {
        setResult(0)
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
        if (isCounting && result >= 5 && result < 50) {
                setResult(prevNumb => prevNumb + 1);
            } else if (result >= 50) {
                clearInterval(intervalId)
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [isCounting, result]);

    const startTimer = () => {
        setIsCounting(true)
    }
    const stopTimer = () => {
        setIsCounting(false)
    }

        return (
        <div>
            <h2>{result}</h2>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={reset}>*</button>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Pause</button>
        </div>
    )
} 

export const Calc = () => {
    const [first, setFirst] = useState()
    const [second, setSecond] = useState()
    const [res, setRes] = useState()
    const plusss = () => {
        setRes(first + second)
    }
    const minuss = () => {
        setRes(first - second)
    }
    const mnozh = () => {
        setRes(first * second)
    }
    const dill = () => {
        setRes(first / second)
    }
    const reseee = () => {
        setRes(0)
    }
    return (
        <div>
            <input
            value={first}
            onChange={(e) => setFirst(+e.target.value)}
            ></input>
            <button onClick={plusss}>+</button>
            <button onClick={minuss}>-</button>
            <button onClick={mnozh}>*</button>
            <button onClick={dill}>/</button>
            <button onClick={reseee}>@</button>
            <input
            value={second}
            onChange={(e) => setSecond(+e.target.value)}
            ></input>
            <h2>=</h2>
            <h2>{res}</h2>
        </div>
    )
}

export const UserList = () => {
    const users = [
        { name: 'Sasha', age: 25, mail: 'dfg.gmail.com'},
        { name: 'Masha', age: 26, mail: 'lkk.gmail.com'},
        { name: 'Pasha', age: 27, mail: 'nbv.gmail.com'},
        { name: 'Kasha', age: 50, mail: 'ngjg.gmail.com'},
    ]
    const listItem = users.map((user) =>
        <li
        key={user.mail}
        style={{color: user.age >=26 ? 'red' : 'blue'
    }}
        >
            {user.name} -
            {user.age} 
            ({user.mail})
        </li>)

    const average = (users) => {
        const totalAge = users.reduce((sum, user) => sum + user.age, 0);
        return users.length > 0 ? totalAge / users.length : 0;
    }
    // const average = (users) => {
    //     const totalAge = users.reduce((sum, user) => {
    //         return sum + user.age
    //     }, 0);
    //     const isUsers = users.length > 0
    //     let res = 0
    //     if(isUsers) {
    //         res = totalAge / users.length
    //     }
    //     return res
    // }
    const averageAge = average(users);

        return (
            <>
            <ul>{listItem}</ul>
            <p> Середній вік: {averageAge.toFixed(0)}</p>
            </>
            )
}

