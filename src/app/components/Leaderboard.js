import React, { useState, useEffect } from 'react';
import get from "../utility/get";
import Highlight from "./Highlight";
import { useAuth } from "../context/AuthContext";
import { getLeaderboardData } from "../api/requests";

const Leaderboard = () => {
    const [auth] = useAuth();

    const [validatedMinutes, setValidatedMinutes] = useState(0);
    const [leaderboardRank, setLeaderboardRank] = useState(0);

    useEffect(() => {
        async function fetchLeaderboardData() {
            if (auth) {
                const accountNumber = get(auth, 'primaryGroupId', null);

                const response = await getLeaderboardData(accountNumber);

                const seconds = get(response, 'member.score', 0);
                const rank = get(response, 'member.rank', 0);

                const minutes = Math.floor(seconds / 60);

                setValidatedMinutes(minutes);
                setLeaderboardRank(rank);
            }
        }

        fetchLeaderboardData();
    }, [auth])

    const formatValidatedMinutes = minutes => {
        return minutes.toLocaleString();
    }

	return (
	    <div className='leaderboard-stats'>
            <p>Validated Minutes: <Highlight>{formatValidatedMinutes(validatedMinutes)}</Highlight></p>
            <p>Rank <strong>#{leaderboardRank}</strong></p>
        </div>
	)
}

export default Leaderboard;
