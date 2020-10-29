import React, {useContext, useState} from 'react';
import { authService } from 'myFirebase';
import { Link, useHistory } from 'react-router-dom';
import {UserContext} from 'Context';
import NavItem from 'components/NavItem';
import styled from 'styled-components';


const Nav = styled.nav`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 0.5em;
  border-top: 1px solid #000;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  & li.active div{
    color: cornflowerblue;
  }
`;

const Navigation = () => {
    const data = [{
        id: 1,
        text: '단어검색',
        href: '/',
        active: true,
        link: true,
        size: '1.7rem'
    },
    {
        id: 2,
        text: '구글번역',
        href: '/translate',
        active: false,
        link: true,
        size: '1.7rem',
    },
    {
        id: 3,
        text: '보관함',
        href: '/wordlist',
        active: false,
        link: true,
        size: '1.5rem',
    },
    {
        id: 4,
        text: '로그아웃',
        href: '/',
        active: false,
        link: false,
        size: '1.7rem',
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
        <Nav>
            <Ul>
                {list.map((item) => (
                    <li key={item.id} onClick={() => onLinkClick(item.id)} className={item.active ? 'active' : ''}>
                        {item.link
                            ? <Link to={item.href}>
                                  <NavItem id={item.id} size={item.size} text={item.text} />
                              </Link>
                            : <button>
                                  <NavItem id={item.id} size={item.size} text={item.text} />
                              </button>
                        }
                    </li>
                ))}
            </Ul>
        </Nav>
    )
}

export default Navigation;