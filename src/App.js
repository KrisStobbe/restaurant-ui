import React from 'react';
import CardList from './CardList';
import {restaurants} from './restaurants';
import SearchBox from './SearchBox.js';
import Introduction from './Introduction.js'
import './App.css';
import Scroll from './Scroll.js';


class App extends React.Component {
	constructor() {
		super()
		this.state = {
			restaurants: restaurants,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		  this.setState({searchfield: event.target.value});
	}

	render() {
	const filteredRestaurants = this.state.restaurants.filter(restaurants => {
			return restaurants.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	if (this.state.restaurants.length === 0) {
		return <h1 className = 'Load'>Loading</h1>
	} else {
		return (
		<div className = 'tc'>
			<h1 className = 'f1'> SAS Austin Food List</h1>
			<Introduction />
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList restaurants={filteredRestaurants}/>
			</Scroll>
		</div>
		);
	}
  }	
}

export default App;