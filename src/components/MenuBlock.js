import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  display: none;
  width: 100%;
  font-family: 'Slabo 27px', serif;
  font-size: 1.3rem;
  color: #eee;
  text-align: left;
  @media screen and (min-width: 30rem) {
    display: block;
  }
  @media screen and (min-width: 48rem) {
    display: block;
    font-size: 1.7rem;
  }
`;

function MenuBlock({ menu }) {
    return (
        <Menu>
            {menu}
        </Menu>
    );
}

export default MenuBlock;