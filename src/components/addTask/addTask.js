import { useState } from 'react'
import './addTask.css'

export const AddTask = ({addTask}) => {

    const [taskMessage, setMessage] = useState('')

    return ( 
    <div>
        <input value={taskMessage} onChange={(event) => {
            setMessage(event.target.value)
        }}/>
        <button onClick={() => {
            addTask(taskMessage)
            setMessage('')
        }}>Add</button>
    </div>
    )
}

