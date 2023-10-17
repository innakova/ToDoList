import './todoItem.css'

export const TodoItem = ({message, important, done, toogleDone}) => {
    const itemStyle = {
        color: important ?  "white" : "#270223",
        textDecoration: done ? "line-through" : "none"
    };

    return (
        <span className='task-li-item'
        title='Tap if task is done'
            style={itemStyle}
            onClick={toogleDone}
        >
            {message}
        </span>
    )
};