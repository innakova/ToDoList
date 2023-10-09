import { ItemStatusFilter } from '../itemStatusFilter/itemStatusFilter';
import './searchPanel.css'

export const SearchPanel = ({filter, setFilter}) => {
    return (
      <div className='search-panel'>
        <input placeholder='Type what you want'/>
        <ItemStatusFilter filter={filter} setFilter={setFilter}/>
      </div>
    )
};