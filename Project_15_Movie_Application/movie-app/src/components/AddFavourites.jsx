/* eslint-disable */
import React from 'react';

const AddFavourite = (props) => {
	return (
		<button onClick={props.onClick} className='btn btn-link'>
			<span className='mr-2'>Add to Favourites</span>
			<svg
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
				className='bi bi-heart-fill' // Corrected className
				fill='red'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd' // Corrected fillRule
					d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
				/>
			</svg>
		</button>
	);
};

export default AddFavourite;