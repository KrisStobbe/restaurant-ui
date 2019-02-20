import React from 'react';
import './Introduction.css';

/*React Componenents can only return one thing, which is why I wrap the HTML in a DIV */
const Introduction = () => {
	return ( 
	<div className = 'intro'>
		<h2> Welcome to (SAS) Austin</h2>
			<div>
				<h3>How this Works: </h3>
					<div className = 'container'>
						<div className = 'cost'>
							<h4 > Cost Key: </h4>
								<ul className = 'box1'>
									<li> $ = 0-8 Dollars </li>
									<li> $$ = 0-8 Dollars </li>
									<li> $$$ = 0-8 Dollars </li>
								</ul>
						</div>
						<div className = 'distance'>
							<h4> Distance Key: </h4>
								<ul className = 'box2'>
									<li> 🚶‍ = 0-1 Block </li>
									<li> 🚶‍🚶‍ = 2-3 Blocks </li>
									<li> 🚶‍🚶‍🚶‍ = 4-8 Blocks </li>
								</ul>
						</div>	
					</div>
			</div>
	</div>
	);
}

export default Introduction; 