import React from 'react';

const Certificate = ({ title, completionDate }) => {
    const date = new Date(completionDate);

	return (
		<div className='certification'>
			<h3>{title}</h3>
			<span className='completion'>Completed on {date.toLocaleDateString()}</span>
		</div>
	)
}

export default Certificate;
