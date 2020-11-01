import React, {useContext, useEffect, useState} from 'react';
import ListDetail from 'components/ListDetail';
import {UserContext} from 'Context';
import {dbService} from 'myFirebase';
import styled, {css} from 'styled-components';

const borderStyles = css`
    ${prop => (prop.position === 'right')
    ? css`
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;`
    : css`
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    `}
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%; 
    background-color: #202020;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 2rem;
`;

const Li = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    border: 1px solid #ffed97;
    & button {
      color: #ffed97;
    }
    background-color: rgba(0, 0, 0, 0);
    &.active {
      & button {
         color: #333;
      }
      background-color: #ffed97;
    }
    ${borderStyles}
`;

const ResultContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Message = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 200px;
  font-size: 0.8rem;
  color: #eee;
  transform: translate(-50%, -50%);
`;

function List({ collectionPath }) {
    const initialMenuList = [
        {
            text : '단어',
            position: 'left',
            active: true,
        },
        {
            text : '번역',
            position: 'right',
            active: false,
        }
    ]
    const [menuList, setMenuList] = useState(initialMenuList);
    const [menu, setMenu] = useState(true);
    const userObj = useContext(UserContext)[0];
    const [words, setWords] = useState([]);
    const [translations, setTranslations] = useState([]);
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        getDataList('words');
    },[collectionPath]);

    const getDataList = (category) => {
        dbService.collection(category).orderBy('date', 'desc').onSnapshot(snapshot => {
            const results = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            (results.length) ? setEmpty(false) : setEmpty(true);
            (category === 'words') ? setWords(results) : setTranslations(results);
        });
    }

    const onMenuClick = (index) => {
        const wordList = (index === 0);
        getDataList(wordList ? 'words' : 'translations');
        wordList ? setMenu(true) : setMenu(false);
        setMenuList(menuList.map((item, i) => (index === i)
            ? {...item, active: true}
            : {...item, active: false}));
    }

    return (
        <ListContainer empty={empty}>
            <Ul>
                {menuList.map((item, index) =>
                    <Li key={index} onClick={() => onMenuClick(index)} className={item.active? 'active' : ''} position={item.position}>
                        <button type="button">{item.text}</button>
                    </Li>
                )}
            </Ul>
            <ResultContainer>
                {empty
                    ? <Message>아직 북마크를 이용하지 않으셨어요.</Message>
                    : <>
                        {menu
                            ? <ul>
                                {words
                                    .filter(word => word.creator === userObj.uid)
                                    .map(word => <ListDetail
                                        key={word.id}
                                        menu={menu}
                                        item={word}
                                    /> )}
                              </ul>
                            : <ul>
                                {translations
                                    .filter(transaction => transaction.creator === userObj.uid)
                                    .map(transaction => <ListDetail
                                        key={transaction.id}
                                        menu={menu}
                                        item={transaction}
                                    /> )}
                              </ul>}
                      </>
                }
            </ResultContainer>
        </ListContainer>
    );
}

export default List;