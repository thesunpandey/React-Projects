/* eslint-disable */
import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<div className='movie-grid'>
			{props.movies.map((movie, index) => (
				<div className='image-container' key={index}>
					<img src={movie.Poster} alt='movie'></img>
					<div className='overlay d-flex align-items-center justify-content-center'>
						{/* Overlay content here */}
					</div>
					<div className='mt-2'>
						<FavouriteComponent 
							onClick={() => props.handleFavouritesClick(movie)} 
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default MovieList;