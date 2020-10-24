import React from 'react';
import {dbService} from "../myFirebase";

function Word({ word, collectionPath }) {
    const onDeleteClick = async () => {
        await dbService.doc(`${collectionPath}/${word.id}`).delete();
    }
    return (
        <>
            <div>{word.word}</div>
            <button onClick={onDeleteClick}>삭제</button>
        </>
    );
}

export default Word;