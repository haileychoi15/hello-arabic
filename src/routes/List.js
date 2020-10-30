import React, {useContext, useEffect, useState} from 'react';
import ListWord from 'components/ListWord';
import {UserContext} from 'Context';
import {dbService} from 'myFirebase';
import styled, {css} from 'styled-components';

const ListContainer = styled.div`
    width: 100%;
    height: 100%; 
    padding: 1rem;
    ${props => props.empty && css`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`;

function List({ collectionPath }) {
    const userObj = useContext(UserContext)[0];
    const [words, setWords] = useState([]);
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        let fetching = true;
        dbService.collection(collectionPath).orderBy('date', 'desc').onSnapshot(snapshot => {
            const wordData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            if (fetching) {
                console.log(wordData, empty);
                (wordData.length) ? setEmpty(false) : setEmpty(true);
                setWords(wordData);
            }
        });
        return () => {fetching = false};
    },[collectionPath]);

    return (
        <ListContainer empty={empty}>
            {empty
            ? <span>북마크된 단어가 없습니다.</span>
            : <ul>
                {words
                    .filter(word => word.creator === userObj.uid)
                    .map(word => <ListWord
                        key={word.id}
                        word={word}
                        collectionPath={collectionPath}
                    /> )}
              </ul>
            }
        </ListContainer>
    );
}

export default List;