import React from 'react';

class Categories extends React.Component {

	render() {
		return (
			<div className="menu header">
				<a className={this.props.category === 'repos' ? 'item active' : 'item'} href="#" onClick={(e) => this.props.changeCategory('repos')}>
					<span className="ui header small inverted" style={{fontWeight: 'normal'}}>
						Repositories
					</span>
				</a>
				<a className={this.props.category === 'orgs' ? 'item active' : 'item'} href="#" onClick={(e) => this.props.changeCategory('orgs')}>
					<span className="ui header small inverted" style={{fontWeight: 'normal'}}>
						Organizations
					</span>
				</a>
			</div>
		);
	}
}

export default Categories;
		