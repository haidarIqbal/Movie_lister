import React from "react";
const SearchBox = ({ value, onchange }) => {
  return (
    <div className="form-group">
      <input
        value={value}
        onChange={(e) => onchange(e.currentTarget.value)}
        className="form-control"
      />
    </div>
  );
};

export default SearchBox;
