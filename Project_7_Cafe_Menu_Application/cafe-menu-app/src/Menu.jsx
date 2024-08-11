/* eslint-disable */
import React from "react";

// Menu component that takes in a list of items as a prop
const Menu = ({ items }) => {
  return (
    // Wrapper div with a class name for styling
    <div className="section-center">
      {/* Mapping over the items array to render each menu item */}
      {items.map((menuItem) => {
        // Destructuring properties from the menuItem object
        const { id, title, img, desc, price } = menuItem;
        
        return (
          // Each article represents a single menu item
          // Using the id as the unique key for each item
          <article key={id} className="menu-item">
            {/* Displaying the image of the menu item */}
            <img src={img} alt={title} className="photo" />
            
            {/* Container for the item's title, price, and description */}
            <div className="item-info">
              <header>
                {/* Displaying the title of the menu item */}
                <h4>{title}</h4>
                {/* Displaying the price, multiplying by 10 and flooring it */}
                <h4 className="price">₹{Math.floor(price) * 10}</h4>
              </header>
              {/* Displaying the description of the menu item */}
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

// Exporting the Menu component for use in other parts of the application
export default Menu;