import React from 'react';
import { SomeText } from '../some-text/SomeText';

export const Win = props => {
	const { win } = props;
	return (
		<div className="win">
			{win ? `+${win}` : <SomeText text={'SPIN to WIN'} />}
		</div>
	);
};
