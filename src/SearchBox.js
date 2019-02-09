import React from 'react';

class SearchBox extends React.Component {
	state = {searchTerm: ''}

	onInputChange = (event) => {
		this.setState({searchTerm: event.target.value});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onTermSubmit(this.state.searchTerm);
	}

	render() {
		return (
			<div className="search-bar ui segment inverted" style={{borderRadius: '10px'}}>
				<form className="ui form" onSubmit={this.handleSubmit}>
					<div className="field">
						<label style={{color: 'white', fontSize: '15px', letterSpacing: '0.5px', paddingBottom: '5px', textAlign: 'center'}}>
							{this.props.category === 'repos' ? 'Enter username to show repositories' : 'Enter username to show organisations'}
						</label>
						<input type="text" value={this.state.searchTerm} onChange={this.onInputChange}/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBox;
