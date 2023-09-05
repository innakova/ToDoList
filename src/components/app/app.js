import { useState } from 'react'
import { Header } from '../header/header'
import { SearchPanel } from '../searchPanel/searchPanel'
import { TodoList } from '../todoList/todoList'
import './app.css'

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

    return (
      <div>
        <Header />
        <SearchPanel />
        <TodoList data={data} toogleDone={toogleDone} toogleImp={toogleImp}/>
      </div>
    )
}