import React, {useState} from 'react';
import {dbService} from 'myFirebase';
import {getWordResult} from 'services/API';
import Result from 'components/Result';

function Word({ word, collectionPath }) {
    const [open, setOpen] = useState(false);
    const [results, setResults] = useState(null);
    const onWordClick = async  () => {
        if (!open) {
            const result = await getWordResult("زَهْرَة");
            setResults(result);
        }
        setOpen(prev => !prev);
    }
    const onDeleteClick = async () => {
        await dbService.doc(`${collectionPath}/${word.id}`).delete();
    }
    return (
        <li onClick={onWordClick}>
            <div>{word.word}</div>
            <button onClick={onDeleteClick}>삭제</button>
            <div>
                {open && <Result results={results} />}
            </div>
        </li>
    );
}

export default Word;