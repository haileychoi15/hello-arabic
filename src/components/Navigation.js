import React, {useContext, useState} from 'react';
import { authService } from 'myFirebase';
import { Link, useHistory } from 'react-router-dom';
import {UserContext} from 'Context';
import NavItem from 'components/NavItem';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 100%;
  height: 12%;
  padding: 0 1rem 1rem;
  background-color: #202020;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.5em;
  margin: 0 auto;
  border: 1px solid #404040;
  border-radius: 32px;
  background-color: #303030;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  &.active div {
    color: #ffed97;
  }
`;

const Navigation = () => {
    const data = [{
        id: 1,
        href: '/',
        active: true,
        link: true,
        size: '1.7rem'
    },
    {
        id: 2,
        href: '/translate',
        active: false,
        link: true,
        size: '1.7rem',
    },
    {
        id: 3,
        href: '/wordlist',
        active: false,
        link: true,
        size: '1.7rem',
    },
    {
        id: 4,
        href: '/',
        active: false,
        link: false,
        size: '2rem',
    }];
    const [list, setList] = useState(data);

    const history = useHistory();
    const setUserObj = useContext(UserContext)[1];

    const onLogOutClick = () => {
        authService.signOut();
        setUserObj(null);
        const homeURL = '/';
        if (history.location.pathname !== homeURL) history.push(homeURL);
    }

    const onLinkClick = (id) => {
        setList(list.map((item, index) =>  (id === item.id)
            ? {...item, active: true}
            : {...item, active: false}));
    }

    return (
        <NavContainer>
            <Nav>
                <Ul>
                    {list.map((item) => (
                        <Li key={item.id} onClick={() => onLinkClick(item.id)} className={item.active ? 'active' : ''}>
                            {item.link
                                ? <Link to={item.href}>
                                    <NavItem id={item.id} size={item.size} />
                                </Link>
                                : <button>
                                    <NavItem id={item.id} size={item.size} />
                                </button>
                            }
                        </Li>
                    ))}
                </Ul>
            </Nav>
        </NavContainer>
    )
}

export default Navigation;