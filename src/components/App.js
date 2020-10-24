import React, {useEffect, useState} from 'react';
import AppRouter from 'components/Router';
import { authService } from 'myFirebase';
import { UserContext } from 'Context';

function App() {
    const [init, setInit] = useState(false);
    const [userObj, setUserObj] = useState(null);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUserObj(user);
            }
            setInit(true);
        });
    }, []);
    return (
        <UserContext.Provider value={[userObj, setUserObj]}>
            {init  ? <AppRouter login={Boolean(userObj)} /> : 'Initializing...'}
        </UserContext.Provider>
    );
}

export default App;
