import React, { useState, useEffect } from 'react';
import Stat from "./Stat";
import Book from "../icons/Book";
import Video from "../icons/Video";
import Clock from "../icons/Clock";
import { useAuth } from "../context/AuthContext";
import { getViewingStats } from "../api/requests";

const StatList = () => {
	const initialState = {
		hoursWatched: 0,
		completedCourses: 0,
		completedVideos: 0
	};

	const [auth] = useAuth();
	const [watchedData, setWatchedData] = useState(initialState);

	useEffect(() => {
        async function fetchViewingStats() {
            if (auth) {
                const stats = await getViewingStats();

                const hoursWatched = Math.floor(stats.total_seconds_watched / 3600).toLocaleString();
                const completedCourses = stats.completed_collections.toLocaleString();
                const completedVideos = stats.completed_videos.toLocaleString();

                setWatchedData({
                    hoursWatched,
                    completedCourses,
                    completedVideos
                })
            }
        }

		fetchViewingStats();
	}, [auth]);

	return (
		<div className='watched-stats'>
			<Stat Icon={Clock} value={watchedData.hoursWatched } name='Training Hours' color='primary' />
			<Stat Icon={Book} value={watchedData.completedCourses} name='Courses Completed' color='secondary' />
			<Stat Icon={Video} value={watchedData.completedVideos } name='Videos Completed' color='grey' />
		</div>
	)
}

export default StatList;
