import { TodoItem } from '../todoItem/todoItem';
import './todoList.css'

export const TodoList = ({data, toogleDone, toogleImp, deleteTask}) => { 

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
                <button className='grean-button' onClick={() => deleteTask(item.message)}>Del</button>
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

