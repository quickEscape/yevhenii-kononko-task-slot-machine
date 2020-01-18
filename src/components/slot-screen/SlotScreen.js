import * as React from 'react';

export const SlotScreen = props => (
	<div className="slot-screen">
		{props.slots.map((slot, i) => (
			<SlotRow key={i} row={slot} />
		))}
	</div>
);

const SlotRow = props => (
	<div className="slot-row">
		{props.row.map((value, i) => (
			<div key={i} className="slot-item">
				{value}
			</div>
		))}
	</div>
);
