import React, { useEffect, useState } from 'react';
import Watching from "./Watching";
import { useAuth } from '../context/AuthContext';
import { getViewingHistory } from '../api/requests';

const Watchlist = () => {
    const [auth] = useAuth();

    const [views, setViews] = useState({})

    useEffect(() => {
        fetchViewingHistory();
    }, [auth])

	return (
		<div className='watchlist'>
			<Watching collection={views[0]}/>
		</div>
	)

    async function fetchViewingHistory() {
        if (auth) {
            const response = await getViewingHistory();

            setViews(response.items);
        }
    }
}

export default Watchlist;
