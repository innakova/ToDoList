import { TodoItem } from '../todoItem/todoItem';
import './todoList.css'

export const TodoList = ({data, toogleDone, toogleImp, deleteTask}) => { 

const elements = data?.map((item) => {
    const importantButtonClases = item.important ? 'important-button-active button-add-task' : 'important-button button-add-task'
    return (
        <li key={item.message} className='li-item'>
            <TodoItem 
                toogleDone={() => toogleDone(item.message)}
                message={item.message}
                important={item.important}
                done={item.done}
                
            />
            <div className='control-button'>
                <button title='Delete' className='delete-button button-add-task' onClick={() => deleteTask(item.message)}>Del</button>
                <button title='Important' className={importantButtonClases} onClick={() => toogleImp(item.message)}>Imp</button>
            </div>
                
        </li>
    )
});

    return (
        <div className='todo-list-items'>
            <ul className='task-text'>
                {elements}          
            </ul>
        </div>
    )
};

