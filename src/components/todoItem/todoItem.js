import './todoItem.css'

export const TodoItem = ({message, important, done, toogleDone}) => {
    const itemStyle = {
        color: important ? "red" : "green",
        textDecoration: done ? "line-through" : "none"
    };

    return (
        <span 
            style={itemStyle}
            onClick={toogleDone}
        >
            {message}
        </span>
    )
};