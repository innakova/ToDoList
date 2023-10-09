import './app.css'
import { useState } from 'react'
import { Header } from '../header/header'
import { SearchPanel } from '../searchPanel/searchPanel'
import { TodoList } from '../todoList/todoList'
import { AddTask } from '../addTask/addTask'
import { AddSpecialTask } from '../addSpecialTask/addSpecialTask'
import { Calc, Counter} from '../counter/counter'

const initData = [
  {message: 'Drink tea', important: false, done: false },
  {message: 'Read book', important: true, done: false },
  {message: 'Go to park', important: false, done: true },
];

export const App = () => {

  const [data, setData] = useState(initData)

  const [filter, setFilter] = useState('all');


    const toogleDone = (message) => {
      setData((oldData) => {
        const newData = oldData.map((task) => {
          const taskToChange = task.message === message
          if(taskToChange){
            return ({
              ...task,
              done: !task.done
            })
          }
          return task
        })
        return newData
      })
    }

    const toogleImp = (message) => {
      setData((oldData) => {
        const makeImp = oldData.map((task) =>{
          const impToChange = task.message === message
          if(impToChange){
            return({
              ...task,
              important: !task.important
            })
          }
          return task     
        })
        return makeImp
      })
    }

     const deleteTask = (message) => {
      setData((oldData) => {
        const deletedData = oldData.filter((task) =>{
          const toDelete = task.message === message
          if(toDelete){
            return false;
          }
          return true     
        })
        return deletedData
      })
    }

    const addTask = (message) => {
      setData((oldData) => {
        const addedData = [
          ...oldData,
          {
            message, 
            important: false, 
            done: false 
          }
        ]
        return addedData
    })
  }

    const addSpecialTask = () => {
      setData((oldData) => {
        const addedSpecData = [
          ...oldData,
          {
            message: 'watch special film with boyfriend',
            important:true,
            done:false
          }
        ]
        return addedSpecData
      })
    }

      


      // const showAll = () => {
      //   setFilter('all');
      // };
      
      // const showCompleted = () => {
      //   setFilter('completed');
      // };
      
      // const showActive = () => {
      //   setFilter('active');
      // };
      
      const filteredTasks = data.filter((task) => {
        if (filter === 'completed') {
          return task.done;
        } else if (filter === 'active') {
          return !task.done;
        }
        return true; // Показувати всі завдання при 'all' фільтрі
      });
      



    return (
      <div>
        <Header />
        <SearchPanel filter={filter} setFilter={setFilter} />
        {/* <TodoList data={data} toogleDone={toogleDone} toogleImp={toogleImp} deleteTask={deleteTask} /> */}
        <AddTask addTask={addTask} />
        <AddSpecialTask addSpecialTask={addSpecialTask} />
        <Counter />
        <Calc />
        <TodoList data={filteredTasks} toogleDone={toogleDone} toogleImp={toogleImp} deleteTask={deleteTask} />

          {/* <div className='filter-buttons'>

            <button className='single-button button-add-task' onClick={showAll}>All</button>
            <button className='single-button button-add-task' onClick={showCompleted}>Done</button>
            <button className='single-button button-add-task' onClick={showActive}>Active</button>
          </div> */}
            
        {/* <UserList /> */}
        {/* <BookList /> */}
      </div>
    )
}