import React, {useContext, useEffect, useState} from 'react';
import Word from 'components/Word';
import {UserContext} from 'Context';
import {dbService} from 'myFirebase';

function List({ collectionPath }) {
    const userObj = useContext(UserContext)[0];
    const [words, setWords] = useState([]);

    useEffect(() => {
        let fetching = true;
        dbService.collection(collectionPath).orderBy('date', 'desc').onSnapshot(snapshot => {
            const wordData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            if (fetching) setWords(wordData);
        });
        return () => {fetching = false};
    },[collectionPath]);

    return (
        <div>
            <ul>
                {words
                    .filter(word => word.creator === userObj.uid)
                    .map(word => <Word
                        key={word.id}
                        word={word}
                        collectionPath={collectionPath}
                    /> )}
            </ul>
        </div>
    );
}

export default List;