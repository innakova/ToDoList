import './itemStatusFilter.css'

export const ItemStatusFilter = () => {
    return (
        <div className='filter-buttons'>
            <button className='single-button'>All</button>
            <button className='single-button'>Active</button>
            <button className='single-button'>Done</button>
        </div>
    )
};