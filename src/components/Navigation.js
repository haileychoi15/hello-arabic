import React, {useContext} from 'react';
import { authService } from 'myFirebase';
import { Link, useHistory } from 'react-router-dom';
import {UserContext} from "../Context";
import styled from 'styled-components';
import {IoIosSearch, IoIosLogOut} from 'react-icons/io';
import {MdGTranslate} from 'react-icons/md';
import {IconContext} from 'react-icons';


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
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.7rem;
  height: 1.7rem;
`;

const Text = styled.div`
  margin-top: 5px;
  font-size: 0.5rem;
`;

const Navigation = () => {
    const history = useHistory();
    const setUserObj = useContext(UserContext)[1];
    const onLogOutClick = () => {
        authService.signOut();
        setUserObj(null);
        const homeURL = '/';
        if (history.location.pathname !== homeURL) history.push(homeURL);
    }

    const onLinkClick = (index) => {
        setList(list.map((item, i) => {
            item.active = false;
            if (i === index)
                item.active = !item.active;
        }));
    }
    }

    // state
    const list = [{
        name: '단어검색',
        href: '',
        active: false,
        link: true
    }];

    return (
        <Nav>
            <Ul>
                (item, index)
                <li onClick={onLinkClick} className={active ? '' : ''}>
                    {link ? <Link to="/"> : <button></button>}
                    <Link to="/">
                        <NavItem>
                            <Icon>
                                <IconContext.Provider value={{ size: "1.7rem" }}>
                                    <IoIosSearch />
                                </IconContext.Provider>
                            </Icon>
                            <Text>단어검색</Text>
                        </NavItem>
                    </Link>
                </li>
                <li onClick={onLinkClick}>
                    <Link to="/translate">
                        <NavItem>
                            <Icon>
                                <IconContext.Provider value={{ size: "1.7rem" }}>
                                    <MdGTranslate />
                                </IconContext.Provider>
                            </Icon>
                            <Text>구글번역</Text>
                        </NavItem>
                    </Link>
                </li>
                <li onClick={onLinkClick}>
                    <Link to="/wordlist">
                        <NavItem>
                            <Icon>
                                <IconContext.Provider value={{ size: "1.5rem" }}>
                                    <BsFolderCheck />
                                </IconContext.Provider>
                            </Icon>
                            <Text>보관함</Text>
                        </NavItem>
                    </Link>
                </li>
                <li onClick={onLinkClick}>
                    <button onClick={onLogOutClick}>
                        <NavItem>
                            <Icon>
                                <IconContext.Provider value={{ size: "1.7rem" }}>
                                    <IoIosLogOut />
                                </IconContext.Provider>
                            </Icon>
                            <Text>로그아웃</Text>
                        </NavItem>
                    </button>
                </li>
            </Ul>
        </Nav>
    )
}

export default Navigation;