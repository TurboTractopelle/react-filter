import React from "react";

const SearchBar = props => {
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="search user"
        onChange={e => props.searchFunc(e)}
      />
    </div>
  );
};

export default SearchBar;
