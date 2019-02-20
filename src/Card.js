import React from 'react';
import './Card.css';

/*Importing the Correct Photo to Use*/
import one from './photos/1.jpeg';

const Card = (props) => {
	const {name, Cost, Distance, Rating, Description } = props;
	return ( 
	<div className = 'card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt = 'Food' src = {one} /> {/* Image for each Restaurant that I use */}
			<div>
				<h2>{name}</h2>
				<h3>Cost: {Cost}</h3>
				<h3>Distance: {Distance}</h3>
				<h3>Rating: {Rating}</h3>
				<p>Desciption: {Description}</p>
			</div>
	</div>
	);
}

export default Card; 