/* eslint-disable */
import React from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          {/* Name of the Trip  */}
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{info}</p>
        {/* Details of the Trip */}
        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;