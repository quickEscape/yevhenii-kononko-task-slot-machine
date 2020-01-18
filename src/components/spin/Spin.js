import React from 'react';

export const Spin = props => {
	const { handlerSpin, disabled } = props;
	return (
		<div className="spin">
			<button className="spin__btn" onClick={handlerSpin} disabled={disabled}>
				spin
			</button>
		</div>
	);
};
