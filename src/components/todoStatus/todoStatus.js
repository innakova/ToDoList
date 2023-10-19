import './todoStatus.css'

export const TodoStatus = ({data}) => {
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
            <p className='todoStatus'>{allTasks} total tasks. {activeTasks} more to do. {doneTasks} done.</p>
        </div>
    )
};