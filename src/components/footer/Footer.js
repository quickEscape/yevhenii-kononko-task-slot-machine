import * as React from 'react';
import { Bet } from '../bet/Bet';
import { Spin } from '../spin/Spin';
import { Win } from '../win/Win';

export const Footer = props => {
	const {
		bet,
		win,
		isMinusDisabled,
		isPlusDisabled,
		isSpinDisabled,
		handlerBetDown,
		handlerBetUp,
		handlerSpin
	} = props;
	return (
		<footer className="footer">
			<Bet
				bet={bet}
				isMinusDisabled={isMinusDisabled}
				isPlusDisabled={isPlusDisabled}
				handlerBetDown={handlerBetDown}
				handlerBetUp={handlerBetUp}
			/>
			<Win win={win} />
			<Spin handlerSpin={handlerSpin} disabled={isSpinDisabled} />
		</footer>
	);
};
