import './searchString.css'

export const Search = ({setSearchTerm, searchTerm}) => {
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
        <div>
            <input
                type="text"
                placeholder="Пошук..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    </div>
  );
};

