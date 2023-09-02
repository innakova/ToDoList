import { TodoItem } from '../todoItem/todoItem';
import './todoList.css'

export const TodoList = ({data}) => { 
    console.log(data)

const elements = data.map((item) => {
    // console.log(item)
    return (
        <li key={item.message}>
            <TodoItem
                message={item.message}
                important={item.important}
                // {...item}
            />
        </li>
    )
});

    return (
      <ul>
        {elements}          
      </ul>
    )
};

