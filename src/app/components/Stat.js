import React, { Fragment } from 'react';
import StatIcon from "./StatIcon";

const Stat = ({ Icon, value, name, color }) => {
	return (
	    <div className='stat'>
            <StatIcon Icon={Icon} color={color}/>

            <div>
                <h2>{value}</h2>
                <div>{name}</div>
            </div>
        </div>
	)
}

export default Stat;
