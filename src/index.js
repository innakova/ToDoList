import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

const Header = () => {
return (
  <div>
    <h1>Todo List</h1> 
  </div>
);
};

const SearchPanel = () => {
  return (
    <div>
      <input placeholder='Type what you want'/>
    </div>
  )
};

const TodoList = () => {
  return (
    <ul>
      <li>Learn React </li>
      <li> Watch film </li>
      <li>Read Book</li>      
    </ul>
  )
};

const App = () => {
  return (
    <div>
      <Header />
      <SearchPanel />
      <TodoList />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


