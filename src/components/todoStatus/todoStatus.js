// import { useState } from 'react';
import './todoStatus.css'

export const TodoStatus = ({data}) => {
console.log('dddd', data)

const doneTasks = data.reduce((sum, task) => {
    if (task.done) {
        const incristSum = sum + 1
        return incristSum
    }
    return sum
}, 0)
const allTasks = data.length  
const activeTasks = allTasks - doneTasks

    return (
        <div>
            <p>{allTasks} total tasks</p>
            <p>{activeTasks} more to do, {doneTasks} done</p>
        </div>
    )
};