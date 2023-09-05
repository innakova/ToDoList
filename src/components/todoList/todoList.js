import { TodoItem } from '../todoItem/todoItem';
import './todoList.css'

export const TodoList = ({data, toogleDone, toogleImp}) => { 

const elements = data.map((item) => {
    return (
        <li key={item.message} className='li-item'>
            <TodoItem
                toogleDone={() => toogleDone(item.message)}
                message={item.message}
                important={item.important}
                done={item.done}
            />
            <div className='control-button'>
                <button className='grean-button'>Del</button>
                <button className='red-button' onClick={() => toogleImp(item.message)}>Imp</button>
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

