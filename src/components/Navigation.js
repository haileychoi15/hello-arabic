import React from 'react';
import { authService } from 'myFirebase';
import { Link, useHistory } from 'react-router-dom';

const Navigation = () => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push('/');
    }
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/wordlist">Word List</Link>
                </li>
            </ul>
            <button onClick={onLogOutClick}>로그아웃</button>
        </nav>
    )
}

export default Navigation;