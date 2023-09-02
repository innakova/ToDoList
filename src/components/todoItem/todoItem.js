import './todoItem.css'

export const TodoItem = ({message, important = false}) => {
    const itemStyle = {
        color: important ? "red" : "green"
    };

    return (
        <span style={itemStyle}>{message}</span>
    )
};