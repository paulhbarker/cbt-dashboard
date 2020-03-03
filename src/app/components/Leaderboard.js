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

    async function fetchLeaderboardData() {
        if (auth) {
            const accountNumber = get(auth, 'primaryGroupId', null);

            const response = await getLeaderboardData(accountNumber);

            const minutes = Math.floor(response.member.score / 60);

            setValidatedMinutes(minutes);
            setLeaderboardRank(response.member.rank);
        }
    }
}

export default Leaderboard;
