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
						ImgAddress={restaurants[i].ImgAddress}
						name={restaurants[i].name} 
						Cost={restaurants[i].Cost}
						Distance={restaurants[i].Distance}
						Rating={restaurants[i].Rating}
						Location = {restaurants[i].Location}
						Description = {restaurants[i].Description}/>

				);
			})
		}
		</div>
	);
}
export default CardList;