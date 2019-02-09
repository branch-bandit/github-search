import React from 'react';

const ResultItem = ({title, description, url}) => {
	return (
		<div className="ui segment" style={{marginBottom: '3px', marginTop: '3px', paddingLeft: '20px', paddingRight: '20px'}}>
			<a href={url} style={{color: 'black'}}>
				<div className="ui header" style={{fontSize: '16px', marginBottom: '6px'}}>
					{title}
				</div>
				<p style={{fontSize: '14px'}}>
					{description}
				</p>
			</a>
		</div>
	);
};

const Results = ({gitResults, category}) => {
	const renderedList = gitResults.map((item) => {
		return (
			<ResultItem
				title={(category === 'repos') ? item.name : item.login}
				description={item.description}
				key={item.id}
				url={(category === 'repos') ? item.html_url : `https://github.com/${item.login}`}
			/>
		);
	});

	return (
		<div className="ui relaxed divided list">
			{renderedList}
		</div>
	);
};

export default Results;
