import { TodoStatus } from '../todoStatus/todoStatus';
import './header.css';

export const Header = ({data}) => {
    return (
      <div>
        <h1>Todo List</h1> 
        <TodoStatus data={data} />
      </div>
    );
};

