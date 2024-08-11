/* eslint-disable */
import React from "react";

// Categories component that receives two props: categories and filterItems
const Categories = ({ categories, filterItems }) => {
  return (
    // Wrapper div with a class name for styling the button container
    <div className="btn-container">
      {/* Mapping over the categories array to create a button for each category */}
      {categories.map((category, index) => {
        return (
          // Button element for each category
          // key prop is set to index, which is generally not recommended unless there is no unique ID
          <button
            type="button"
            className="filter-btn"
            key={index}
            // onClick event handler that calls filterItems with the category as an argument
            onClick={() => filterItems(category)}
          >
            {/* Displaying the category name on the button */}
            {category}
          </button>
        );
      })}
    </div>
  );
};

// Exporting the Categories component for use in other parts of the application
export default Categories;