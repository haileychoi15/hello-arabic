import React, {useState} from 'react';
import NavItem from 'components/NavItem';
import styled from 'styled-components';

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
        title: 'home',
        active: true,
        size: '1.7rem'
    },
    {
        id: 2,
        title: 'translate',
        active: false,
        size: '1.7rem',
    },
    {
        id: 3,
        title: 'list',
        active: false,
        size: '1.7rem',
    },
    {
        id: 4,
        title: 'user',
        active: false,
        size: '2rem',
    }];
    const [list, setList] = useState(data);

    const onNavClick = (id, title) => {

        // 리팩토링 필요...
        const apps = document.querySelectorAll('.app');
        apps.forEach(app => {
            app.classList.contains(title) ?  app.classList.add('show') :  app.classList.remove('show');
        });

        setList(list.map((item, index) =>  (id === item.id)
            ? {...item, active: true}
            : {...item, active: false}));
    }

    return (
        <div>
            <Nav>
                <Ul>
                    {list.map((item) => (
                        <Li key={item.id} onClick={() => onNavClick(item.id, item.title)} className={item.active ? 'active' : ''}>
                            <NavItem id={item.id} size={item.size} />
                        </Li>
                    ))}
                </Ul>
            </Nav>
        </div>
    )
}

export default Navigation;