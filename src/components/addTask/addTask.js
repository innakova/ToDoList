import { useState } from 'react'
import './addTask.css'

export const AddTask = ({addTask}) => {

    const [taskMessage, setMessage] = useState('')

    return ( 
    <div className='add-task-block'>
        <input className='add-task-input'placeholder='Add a task' value={taskMessage} onChange={(event) => {
            setMessage(event.target.value)
        }}/>
        <button className='button-add-task add-button' onClick={() => {
            addTask(taskMessage)
            setMessage('')
        }}>Add</button>
    </div>
    )
}

