import React from 'react';

export const Bet = props => {
	const {
		bet,
		isMinusDisabled,
		isPlusDisabled,
		handlerBetDown,
		handlerBetUp
	} = props;
	return (
		<div className="bet">
			<button
				className="bet__btn bet__btn_minus"
				onClick={handlerBetDown}
				disabled={isMinusDisabled}
			>
				-
			</button>
			<div className="bet__info">
				<div className="bet__value">{bet}</div>
				<div className="bet__desc">bet</div>
			</div>
			<button
				className="bet__btn bet__btn_plus"
				onClick={handlerBetUp}
				disabled={isPlusDisabled}
			>
				+
			</button>
		</div>
	);
};
