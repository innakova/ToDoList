import { TodoStatus } from '../todoStatus/todoStatus';
import './header.css';

export const Header = () => {
    return (
      <div>
        <h1>Todo List</h1> 
        <TodoStatus />
      </div>
    );
};

