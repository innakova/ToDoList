import { TodoStatus } from '../todoStatus/todoStatus';
import './header.css';

export const Header = ({data}) => {
    return (
      <div>
        <h1 className='main-title'>Todo List</h1> 
        <TodoStatus data={data} />
      </div>
    );
};

