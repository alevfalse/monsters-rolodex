import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	search = event => {
		const text = event.target.value.toLowerCase();
		this.setState({ searchField: text });
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));

		return (
			<div className='App'>
				<h1>Monsters Rolodex</h1>
				<SearchBox placeholder='Search monsters..' handleChange={this.search} />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
