import React from 'react';
import get from "../utility/get";
import StatList from "./StatList";
import Leaderboard from "./Leaderboard";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
	const [auth] = useAuth();

	const displayName = get(auth, 'profile.display_name', 'Loading...');
	const accountNumber = get(auth, 'primaryGroupId', null);

	return (
		<div className='profile'>
			<h1>{displayName}</h1>
			<Leaderboard accountNumber={accountNumber}/>

			<StatList/>
		</div>
	)
}

export default Profile;
