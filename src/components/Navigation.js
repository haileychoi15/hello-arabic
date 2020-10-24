import React, {useContext} from 'react';
import { authService } from 'myFirebase';
import { Link, useHistory } from 'react-router-dom';
import {UserContext} from "../Context";

const Navigation = () => {
    const history = useHistory();
    const setUserObj = useContext(UserContext)[1];
    const onLogOutClick = () => {
        authService.signOut();
        setUserObj(null);
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