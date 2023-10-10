import './itemStatusFilter.css'

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
      

    return (
      <div>
        <div className='filter-buttons'>
            <button className={filter === 'all' ? 'active-button button-add-task' : 'single-button button-add-task'} onClick={showAll}>All</button>
            <button className={filter === 'completed' ? 'active-button button-add-task' : 'single-button button-add-task'} onClick={showCompleted}>Done</button>
            <button className={filter === 'active' ? 'active-button button-add-task' :'single-button button-add-task'} onClick={showActive}>Active</button>
        </div>
      </div>


    )
};

