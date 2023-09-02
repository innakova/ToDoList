import { Header } from '../header/header'
import { SearchPanel } from '../searchPanel/searchPanel'
import { TodoList } from '../todoList/todoList'
import './app.css'



export const App = () => {
    
    const todoData = [
        {message: 'Drink tea', important: false },
        {message: 'Read book', important: true },
        {message: 'Go to park', important: false },
    ];

    return (
      <div>
        <Header />
        <SearchPanel />
        <TodoList data={todoData} />
      </div>
    )
}