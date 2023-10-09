import './itemStatusFilter.css'
import { useState } from 'react';
// import { TodoItem } from '../todoItem/todoItem';

export const ItemStatusFilter = ({filter, setFilter}) => {  

    const showAll = () => {
        setFilter('all');
      };
      
      const showCompleted = () => {
        setFilter('completed');
      };
      
      const showActive = () => {
        setFilter('active');
      };
      

    // const filteredTodos = data.filter((todo) => {
    //     if  (filter === 'completed') {
    //       return todo.completed;
    //     } else if (filter === 'active') {
    //       return !todo.completed;
    //     }
    //     return true; // Показувати всі завдання при 'all' фільтрі
    //   });
      

    return (
      <div>
        <div className='filter-buttons'>
            <button className={filter === 'all' ? 'active-button button-add-task' : 'single-button button-add-task'} onClick={showAll}>All</button>
            <button className={filter === 'completed' ? 'active-button button-add-task' : 'single-button button-add-task'} onClick={showCompleted}>Done</button>
            <button className={filter === 'active' ? 'active-button button-add-task' :'single-button button-add-task'} onClick={showActive}>Active</button>
        </div>

        <div>
          {/* {filter} */}
            {/* <div>
                <button onClick={showAll}>Всі</button>
                <button onClick={showCompleted}>Виконані</button>
                <button onClick={showActive}>Активні</button>
            </div> */}
            {/* <p>Обраний фільтр: {filter}</p>
            <ul>
            {filteredTodos.map((todo, index) => (
                <TodoItem
                key={index}
                index={index}
                todo={todo}
                // onDelete={deleteTodo}
                // onToggle={toggleTodo}
                />
            ))}
            </ul> */}
        </div>
       </div>


    )
};

