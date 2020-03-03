import React from 'react';

const AuthContext = React.createContext();

function useAuth() {
    const context = React.useContext(AuthContext);

    if (!context) {
        throw new Error(`useAuth must be used within an AuthProvider`);
    }

    return context;
}

function AuthProvider(props) {
    const [auth, setAuth] = React.useState(null);

    const value = React.useMemo(() => [auth, setAuth], [auth]);

    return <AuthContext.Provider value={value} {...props} />;
}

export { AuthProvider, useAuth }
