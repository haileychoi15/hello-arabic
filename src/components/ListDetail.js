import React, {useState} from 'react';
import {dbService} from 'myFirebase';
import {MdDelete} from 'react-icons/md';
import styled, {css} from 'styled-components';

const Li = styled.li`
  border: 1px solid #404040;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 0.8rem;
  background-color: #303030;
`;

const MainResultBlock = styled.div`
  position: relative;
  color: #eee;
`;

const Dl = styled.dl`
  width: 100%;
`;

const Dt = styled.dt`
  //font-family: 'Tajawal', sans-serif;
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 0.9rem;
  ${prop => prop.menu && css`
     font-size: 1.1rem;
  `}
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
  color: #ffed97;
`;

const SubResultBlock = styled.div`
  width: 100%;
  font-size: 0.6rem;
  line-height: 1.2rem;
  color: #a8a8a8;
`;

function ListDetail({ menu, item }) {
    const [open, setOpen] = useState(false);
    const decodeHtml = (html) => {
        const element = document.createElement('textarea');
        element.innerHTML = html;
        return element.value;
    }
    const onDeleteClick = async () => {
        const collectionPath = menu ? 'words' : 'translations';
        await dbService.doc(`${collectionPath}/${item.id}`).delete();
    }
    return (
        <Li>
            <MainResultBlock>
                <Dl open={open} onClick={() => setOpen(prev => !prev)}>
                    {menu
                        ? <>
                            <Dt menu={menu}>{decodeHtml(item.vocForm)}</Dt>
                            <Dd>{item.niceGloss}</Dd>
                          </>
                        : <>
                            <Dt menu={menu}>{item.targetValue}</Dt>
                            <Dd>{item.sourceValue}</Dd>
                        </>
                    }
                </Dl>
                <DeleteButton onClick={onDeleteClick}>
                    <MdDelete />
                </DeleteButton>
            </MainResultBlock>
            {open &&
            <div>
                <SubResultBlock>
                    <span>{item.id}</span>
                    <span>{item.date[0]}</span>
                </SubResultBlock>
            </div>}
        </Li>
    );
}

export default ListDetail;