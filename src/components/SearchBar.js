import React, {useState} from "react";

function SearchBar({setFilterBy, setSortBy}) {
  const [alpha, setAlpha] = useState(true)
  const [price, setPrice] = useState(false)
  
  function handleChange(e) {
    setAlpha(() => !alpha)
    setPrice(() => !price)
    setSortBy(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked= {alpha}
          onChange ={handleChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={price}
          onChange ={handleChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => setFilterBy(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
