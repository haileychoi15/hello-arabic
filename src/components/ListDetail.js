import React, {useCallback, useState} from 'react';
import {dbService} from 'myFirebase';
import {MdDeleteForever} from 'react-icons/md';
import styled, {css} from 'styled-components';
import {useDecode} from 'hooks/useDecode';
import {useDate} from 'hooks/useDate';

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
  padding-right: 1.2rem;
`;

const Dt = styled.dt`
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 0.9rem;
  @media screen and (min-width: 30rem) {
    font-size: 1.1rem;
  }
  ${prop => prop.menu && css`
     font-size: 1.3rem;
  `}
`;

const Dd = styled.dd`
  display: inline-block;
  font-size: 0.8rem;
  &.open {
    display: block;
    line-height: 1.2rem;
    color: #bbb;
  }
  &.ar {
    margin-top: 0.3rem;
  }
  @media screen and (min-width: 30rem) {
    font-size: 1.1rem;
  }
`;

const ArabicBlock = styled.span`
  font-size: 0.9rem;
  margin-left: 0.4rem;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #ffed97;
  @media screen and (min-width: 30rem) {
    top: 0;
    right: 0;
    display: none;
    font-size: 1.5rem;
    color: #848484;
    transition: all 150ms ease-in-out;
    ${Li}:hover & {
      display: flex;
    }
    &:hover {
      color: #ffed97;
    }
  }
`;

const SubResultBlock = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  font-size: 0.6rem;
  text-align: right;
  color: #a8a8a8;
  @media screen and (min-width: 30rem) {
    font-size: 0.8rem;
  }
`;

function ListDetail({ menu, item }) {
    const [open, setOpen] = useState(false);
    const [vocForm, root, sourceValue, targetValue] = useDecode(item.vocForm, item.root, item.sourceValue, item.targetValue);
    const date = useDate(item.date);
    const onDeleteClick = useCallback(async () => {
        const collectionPath = menu ? 'words' : 'translations';
        await dbService.doc(`${collectionPath}/${item.id}`).delete();
    }, [menu, item.id]);
    return (
        <Li>
            <MainResultBlock>
                <Dl open={open} onClick={() => setOpen(prev => !prev)}>
                    {menu
                        ? <>
                            <Dt menu={menu}>{vocForm}</Dt>
                            <Dd>{item.niceGloss}</Dd>
                            {open &&
                                <>
                                    <Dd className="open">{item.posNice}</Dd>
                                    <Dd className="open">Root
                                        <ArabicBlock>{root}</ArabicBlock>
                                    </Dd>
                                </>
                            }
                          </>
                        : <>
                            {item.sourceLang === 'ar'
                                ? <Dt menu={menu}>{sourceValue}</Dt>
                                : <Dt menu={menu}>{item.sourceValue}</Dt>
                            }
                            {open &&
                                <>
                                {item.targetLang === 'ar'
                                        ? <Dd className="open ar">{targetValue}</Dd>
                                        : <Dd className="open">{item.targetValue}</Dd>
                                }
                                </>
                            }
                          </>
                    }
                </Dl>
                <DeleteButton onClick={onDeleteClick}>
                    <MdDeleteForever />
                </DeleteButton>
            </MainResultBlock>
            <SubResultBlock>{date}</SubResultBlock>
        </Li>
    );
}

export default ListDetail;