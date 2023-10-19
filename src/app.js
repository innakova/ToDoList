import './app.css'
import { useState } from 'react'
import { Header } from './components/header/header'
import { SearchPanel } from './components/searchPanel/searchPanel'
import { TodoList } from './components/todoList/todoList'
import { AddTask } from './components/addTask/addTask'
import { Calc, Counter} from './components/counter/counter'

const initData = [
  {message: 'Go for a morning run to stay active', important: false, done: false },
  {message: 'Write a report for the meeting', important: true, done: false },
  {message: 'Code and debug a new feature for the software project', important: true, done: true },
  {message: 'Visit a museum', important: false, done: false },
  {message: 'Read a book', important: true, done: false },
  {message: 'Spend time in nature, taking a leisurely walk', important: false, done: false },
];

export const App = () => {

  const [data, setData] = useState(initData)
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');


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
         
      const filteredTasks = data.filter((task) => {
        if (filter === 'completed') {
          return task.done;
        } else if (filter === 'active') {
          return !task.done;
        }
        return true; 
      });      

      const searchAndFilterTasks = filteredTasks.filter((task) => {
        return task.message.toLowerCase().includes(searchTerm.toLowerCase());
      }
      )

    


    return (
      <div className='main-page'>
        <SearchPanel searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter} />
        <Header data={data}/>
        <TodoList data={searchAndFilterTasks} toogleDone={toogleDone} toogleImp={toogleImp} deleteTask={deleteTask} />
        <Counter />
        <Calc />
        <AddTask addTask={addTask} />         
      </div>
    )
}