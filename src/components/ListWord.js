import React, {useState} from 'react';
import {dbService} from 'myFirebase';
import {MdDelete} from 'react-icons/md';
import styled, {css} from 'styled-components';

const Li = styled.li`
  margin-bottom: 1rem;
`;

const MainBlock = styled.div`
  position: relative;
`;

const Dl = styled.dl`
  width: 100%;
  ${props => props.open && css`
     margin-bottom: 0.5rem;
  `}
`;

const Dt = styled.dt`
  display: inline-block;
  margin-right: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
`;

const Dd = styled.dd`
  display: inline-block;
  font-size: 0.8rem;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #ddd;
  transition: color 150ms ease-in-out;
  &:active,
  &:hover {
    color: #ff6b6b;
  }
`;

const SubBlock = styled.div`
  width: 100%;
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: #a8a8a8;
`;

function ListWord({ word, collectionPath }) {
    const [open, setOpen] = useState(false);
    const decodeHtml = (html) => {
        const element = document.createElement('textarea');
        element.innerHTML = html;
        return element.value;
    }
    const onDeleteClick = async () => {
        await dbService.doc(`${collectionPath}/${word.id}`).delete();
    }
    return (
        <Li>
            <MainBlock>
                <Dl open={open} onClick={() => setOpen(prev => !prev)}>
                    <Dt>{decodeHtml(word.vocForm)}</Dt>
                    <Dd>{word.niceGloss}</Dd>
                </Dl>
                <DeleteButton onClick={onDeleteClick}>
                    <MdDelete />
                </DeleteButton>
            </MainBlock>
            {open &&
            <div>
                <SubBlock>{word.posNice}</SubBlock>
                <SubBlock>{decodeHtml(word.root)}</SubBlock>
            </div>
            }
        </Li>
    );
}

export default ListWord;