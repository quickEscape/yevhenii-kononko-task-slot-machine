import * as React from 'react';
import Div100vh from 'react-div-100vh';

export const Loader = props => {
	const { text } = props;
	return (
		<Div100vh className="loader">
			<div>{text || 'Loading... *simple loader*'}</div>
		</Div100vh>
	);
};
