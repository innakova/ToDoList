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
                <button className='grean-button button-add-task' onClick={() => deleteTask(item.message)}>Del</button>
                <button className='red-button button-add-task' onClick={() => toogleImp(item.message)}>Imp</button>
            </div>
                
        </li>
    )
});

    return (
      <ul className='task-text'>
        {elements}          
      </ul>
    )
};

