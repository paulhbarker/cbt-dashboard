import React, { useState, useEffect } from 'react';
import Leaderboard from "./Leaderboard";
import StatList from "./StatList";
import get from "../utility/get";
import { useAuth } from "../context/AuthContext";
// import API from '../api';

const Profile = () => {
	const [auth, setAuth] = useAuth();

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
