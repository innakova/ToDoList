import { ItemStatusFilter } from '../itemStatusFilter/itemStatusFilter';
import { Search } from '../searchString/searchString';
import './searchPanel.css'

export const SearchPanel = ({filter, setFilter, searchTerm, setSearchTerm}) => {
    return (
      <div className='search-panel'>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <ItemStatusFilter filter={filter} setFilter={setFilter}/>
      </div>
    )
};