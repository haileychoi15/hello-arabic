import React, {useEffect, useState} from 'react';
import AppRouter from 'components/Router';
import { authService } from 'myFirebase';

function App() {
    const [init, setInit] = useState(false);
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setLogin(true);
                setUser(user);
            }
            else {
                setLogin(false);
            }
            setInit(true);
        });
    }, []);
    return (
        <>
            {init  ? <AppRouter login={login} user={user}  /> : 'Initializing...'}
            <footer>&copy hello-arabic {new Date().getFullYear()}</footer>
        </>
    );
}

export default App;
