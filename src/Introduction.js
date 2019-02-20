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
					<h4> Cost Key: </h4>
						<ul>
							<li> $ = 0-8 Dollars </li>
							<li> $$ = 0-8 Dollars </li>
							<li> $$$ = 0-8 Dollars </li>
						</ul>
					<h4> Distance Key: </h4>
						<ul>
							<li> $ = 0-8 Dollars </li>
							<li> $$ = 0-8 Dollars </li>
							<li> $$$ = 0-8 Dollars </li>
						</ul>
				</div>
			</div>
	</div>
	);
}

export default Introduction; 