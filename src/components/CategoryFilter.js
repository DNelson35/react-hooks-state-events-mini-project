import React from "react";

function CategoryFilter({ categories, curCatigory, onCatigoryClick }) {
  const catList = categories.map(cat => {
    return <button
     className={(curCatigory === cat) ? 'selected' : null}
      value={cat} 
      key={cat} 
      onClick={() => onCatigoryClick(cat)} 
      >
      {cat}
      </button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catList}
    </div>
  );
}

export default CategoryFilter;
