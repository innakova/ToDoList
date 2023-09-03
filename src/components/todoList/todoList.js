import { TodoItem } from '../todoItem/todoItem';
import './todoList.css'

export const TodoList = ({data}) => { 
    console.log(data)

const elements = data.map((item) => {
    // console.log(item)
    return (
        <li key={item.message} className='li-item'>
            <TodoItem
                message={item.message}
                important={item.important}
                // {...item}
            />
            <div>
                <button className='grean-button'>Del</button>
                <button className='red-button'>Imp</button>
            </div>
                
        </li>
    )
});

    return (
      <ul>
        {elements}          
      </ul>
    )
};

