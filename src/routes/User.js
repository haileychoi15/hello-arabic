import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {UserContext} from 'Context';
import {authService} from 'myFirebase';
import styled from 'styled-components';
import {FaUserSlash} from 'react-icons/fa';
import {AiOutlineLogout} from 'react-icons/ai';

const UserContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const LogoutButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #404040;
  padding: 0 1rem;
  font-size: 1.2rem;
  color: #ffed97;
`;

const Text = styled.span`
  font-size: 0.8rem;
  color: #848484;
`;

function User() {
    const history = useHistory();
    const setUserObj = useContext(UserContext)[1];

    const onLogOutClick = () => {
        authService.signOut();
        setUserObj(null);
        const homeURL = '/';
        if (history.location.pathname !== homeURL) history.push(homeURL);
    }
    return (
        <UserContainer>
            <LogoutButton onClick={onLogOutClick}>
                <Text>로그아웃</Text>
                <FaUserSlash />
            </LogoutButton>
        </UserContainer>
    );
}

export default User;