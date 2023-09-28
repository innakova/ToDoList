import './app.css'
import { useState } from 'react'
import { Header } from '../header/header'
import { SearchPanel } from '../searchPanel/searchPanel'
import { TodoList } from '../todoList/todoList'
import { AddTask } from '../addTask/addTask'
import { AddSpecialTask } from '../addSpecialTask/addSpecialTask'
import { Calc, Counter, Person } from '../counter/counter'

const initData = [
  {message: 'Drink tea', important: false, done: false },
  {message: 'Read book', important: true, done: false },
  {message: 'Go to park', important: false, done: true },
];

export const App = () => {

  const [data, setData] = useState(initData)

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

    return (
      <div>
        <Header />
        <SearchPanel />
        <TodoList data={data} toogleDone={toogleDone} toogleImp={toogleImp} deleteTask={deleteTask} />
        <AddTask addTask={addTask} />
        <AddSpecialTask addSpecialTask={addSpecialTask} />
        <Counter />
        <Calc />
        <Person />
      </div>
    )
}