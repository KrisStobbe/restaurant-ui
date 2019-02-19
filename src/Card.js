import React from 'react';

const Card = (props) => {
	const {name, email, id } = props;
	return ( 
	<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		{/* Image for each Restaurant that I use */}
		<img alt = 'Food Photo' src = {`https://www.unicohotelrivieramaya.com/link/aa19b4562cdf44e4831919ae8263fa6a.aspx`} /> 
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
	</div>
	);
}

export default Card; 