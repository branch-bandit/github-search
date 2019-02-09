import React from 'react';

const Loader = () => (
	<div>
		<div className="ui segment" style={{border: 'none', boxShadow: '0 0 0', paddingTop: '13vw'}}>
			<div className="ui active inverted dimmer">
				<div className="ui large text loader">Loading</div>
			</div>
		</div>
	</div>
);

export default Loader;
