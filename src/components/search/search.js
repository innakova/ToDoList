import './search.css'

export const Search = ({setSearchTerm, searchTerm}) => {
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (    
    <div>
        <input
        className='search-string'
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
        />
    </div>
    
  );
};

