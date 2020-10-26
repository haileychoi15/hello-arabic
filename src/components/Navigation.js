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
        const homeURL = '/';
        if (history.location.pathname !== homeURL) history.push(homeURL);
    }
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">단어</Link>
                </li>
                <li>
                    <Link to="/wordlist">단어장</Link>
                </li>
                <li>
                    <Link to="/translate">번역</Link>
                </li>
            </ul>
            <button onClick={onLogOutClick}>로그아웃</button>
        </nav>
    )
}

export default Navigation;