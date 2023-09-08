import './itemStatusFilter.css'

export const ItemStatusFilter = () => {
    return (
        <div className='filter-buttons'>
            <button className='single-button button-add-task '>All</button>
            <button className='single-button button-add-task '>Active</button>
            <button className='single-button button-add-task '>Done</button>
        </div>
    )
};