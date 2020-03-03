import React from 'react';

const StatIcon = ({ Icon, color }) => {
	return (
		<div className={'watched-stats-icon ' + color}>
			<Icon />
		</div>
	)
}

export default StatIcon;
