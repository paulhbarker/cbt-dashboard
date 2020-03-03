import React, { useEffect } from 'react';
import '../style/app.scss';
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./context/AuthContext";
import { getAccessToken, getProfile } from "./api/requests";

function App() {
    const setAuth = useAuth()[1];

    useEffect(() => {
        async function authenticate() {
            await getAccessToken();
            const profile = await getProfile();

            setAuth(profile);
        }

        authenticate();
    }, [setAuth]);

    return (
        <div className='app'>
            <Sidebar />
            <Main />
        </div>
    );
}

export default App;
