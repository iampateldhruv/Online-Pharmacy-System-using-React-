import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="SearchBarContainer">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by medicine name..."
        className="SearchBarInput"
      />
    </div>
  );
};

export default SearchBar;
