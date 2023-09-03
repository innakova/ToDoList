import { ItemStatusFilter } from '../itemStatusFilter/itemStatusFilter';
import './searchPanel.css'

export const SearchPanel = () => {
    return (
      <div className='search-panel'>
        <input placeholder='Type what you want'/>
        <ItemStatusFilter />
      </div>
    )
};