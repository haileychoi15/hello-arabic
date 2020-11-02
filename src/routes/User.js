import React, {useContext} from 'react';
import {UserContext} from 'Context';
import {authService} from 'myFirebase';
import styled from 'styled-components';

const UserContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const LogoutButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.8rem;
  color: #ffed97;
`;

function User() {
    const setUserObj = useContext(UserContext)[1];

    const onLogOutClick = () => {
        authService.signOut();
        setUserObj(null);
    }
    return (
        <UserContainer>
            <LogoutButton onClick={onLogOutClick}>로그아웃</LogoutButton>
        </UserContainer>
    );
}

export default User;