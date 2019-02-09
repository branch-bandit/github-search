import React from 'react';
import axios from 'axios';

import Categories from './Categories';
import SearchBox from './SearchBox';
import Results from './Results';
import Loader from './Loader';

class App extends React.Component {
	state = {
		gitResults: [],
		showingResults: false,
		loading: false,
		category: 'repos',
		err: ''
	}

	changeCategory = (cat) => {
		this.setState({category: cat, showingResults: false});
	}

	onTermSubmit = (queryName) => {
		this.setState({loading: true, err: '', gitResults: []});
		axios.get(`https://api.github.com/users/${queryName}/${this.state.category}`).then(response => {
			this.setState({
				showingResults: true,
				loading: false,
				gitResults: response.data
			});
		}).catch(err => {
			this.setState({
				showingResults: true,
				loading: false,
				err
			});
		});
	}

	renderError = ({err}) => {
		let errorString = err.toString();
		return (
			<div className="ui segment" style={{textAlign: 'center', color: 'red'}}>
				{errorString}
			</div>
		);
	}

	renderSubmitOutcome = () => {
		if (this.state.loading) {
			return <Loader />;
		} else {
			if (this.state.showingResults) {
				if (this.state.gitResults.length > 0) {
					return <Results gitResults={this.state.gitResults} category={this.state.category} />;
				} else {
					if (this.state.err) {
						return this.renderError({err: this.state.err});
					} else {
						return this.renderError({err: (this.state.category === 'repos') ? 'No repositories found' : 'No organisations found'});
					}
				}
			} else {
				return null;
			}
		}
	}

	render() {
		return (
			<div>

				<div className="ui inverted menu borderless" style={{height: '8vh', borderRadius: '0'}}>

					<a className="item" href="https://github.com" style={{paddingTop: '16px', paddingBottom: '16px', paddingLeft: '2vw', paddingRight: '2vw'}}>
						<img className="ui tiny image" src="http://www.connekt.com/wp-content/uploads/2016/09/logo-github-uai-258x116.png" alt="github"/>
					</a>

					<Categories changeCategory={this.changeCategory} category={this.state.category} />

				</div>

				<div className="ui ten wide column centered grid middle aligned">
					<div className="ui column" style={{maxWidth: '365px'}}>

						<div className="ui container" style={{paddingTop: '40px', paddingBottom: '40px'}}>
							<img className="ui centered small image" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" style={{minWidth: '100px'}} alt="github octocat logo"/>
						</div>

						<SearchBox onTermSubmit={this.onTermSubmit} category={this.state.category} />

						{this.renderSubmitOutcome()}

					</div>
				</div>

			</div>
		);
	}
}

export default App;
