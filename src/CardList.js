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
						email={restaurants[i].email}/>
				);
			})
		}
		</div>
	);
}
export default CardList;