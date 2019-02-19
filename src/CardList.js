import React from 'react';
import Card from './Card';

const CardList = ({ restaurants }) => {
	return (
		<div>
			{
			restaurants.map((user, i) => {
				return (
					<Card 
						id={restaurants[i].id} 
						name={restaurants[i].name} 
						Cost={restaurants[i].Cost}
						Description = {restaurants[i].Description}/>
				);
			})
		}
		</div>
	);
}
export default CardList;