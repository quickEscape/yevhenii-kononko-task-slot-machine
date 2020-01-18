import * as React from 'react';

export const Header = props => (
	<header className="header">
		<div className="header__balance">{props.balance}</div>
	</header>
);
