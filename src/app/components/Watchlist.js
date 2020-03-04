import React, { useEffect, useState } from 'react';
import Watching from "./Watching";
import { useAuth } from '../context/AuthContext';
import { getViewingHistory } from '../api/requests';
import get from '../utility/get';

const Watchlist = () => {
    const [auth] = useAuth();

    const [views, setViews] = useState({})

    useEffect(() => {
        async function fetchViewingHistory() {
            if (auth) {
                const response = await getViewingHistory();

                const items = get(response, 'items', []);

                setViews(items);
            }
        }

        fetchViewingHistory();
    }, [auth])

    if (!views[0]) {
        return <div>No Data</div>
    }

	return (
		<div className='watchlist'>
			<Watching collection={views[0]}/>
		</div>
	)
}

export default Watchlist;
