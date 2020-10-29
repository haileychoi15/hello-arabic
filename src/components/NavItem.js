import React from 'react';
import styled from 'styled-components';
import {IconContext} from "react-icons";
import {IoIosLogOut, IoIosSearch} from "react-icons/io";
import {MdGTranslate} from "react-icons/md";
import {BsFolderCheck} from "react-icons/bs";

const ItemContainer = styled.div`
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

function NavItem({ id, size, text }) {
    return (
        <ItemContainer>
            <Icon>
                <IconContext.Provider value={{size: size}}>
                    {id === 1 && <IoIosSearch />}
                    {id === 2 && <MdGTranslate />}
                    {id === 3 && <BsFolderCheck />}
                    {id === 4 && <IoIosLogOut />}
                </IconContext.Provider>
            </Icon>
            <Text>{text}</Text>
        </ItemContainer>
    );
}

export default NavItem;