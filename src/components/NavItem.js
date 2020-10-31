import React from 'react';
import styled from 'styled-components';
import {IconContext} from "react-icons";
import {MdSearch, MdGTranslate, MdBookmark, MdPerson, MdAccountCircle} from "react-icons/md";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #848484;
`;

const Icon = styled.div`
/*  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.7rem;
  height: 1.7rem;*/
`;

function NavItem({ id, size }) {
    return (
        <ItemContainer>
            <Icon>
                <IconContext.Provider value={{size}}>
                    {id === 1 && <MdSearch />}
                    {id === 2 && <MdGTranslate />}
                    {id === 3 && <MdBookmark />}
                    {id === 4 && <MdPerson />}
                </IconContext.Provider>
            </Icon>
        </ItemContainer>
    );
}

export default NavItem;