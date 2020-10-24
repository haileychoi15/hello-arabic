import React, {useEffect, useState} from 'react';
import Word from 'components/Word';
import {dbService} from "../myFirebase";

function Home({ user }) {
    const [value, setValue] = useState('');
    const [lang, setLang] = useState(true); // arabic
    const [added, setAdded] = useState(false);
    const [words, setWords] = useState([]);
    const collectionPath = 'words';

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
    },[]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const date = new Date();
        const data = await dbService.collection(collectionPath).add({
            creator: user.uid,
            word: value,
            date
        });
        if(data) setAdded(true);
    }
    const onChange = (e) => {
        const { value } = e.target;
        setValue(value);
        setAdded(false);
    }
    const onToggleLang = () => {
        setLang(lang => !lang);
    }
    const onToggleSearch = () => {
    }
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="단어를 입력하세요."
                    lang="ar"
                    maxLength={30}
                    value={value}
                    onChange={onChange} />
                {added &&
                <span>단어장에 추가되었습니다.</span>
                }
                <button type="button" onClick={onToggleSearch}>
                    단어찾기
                </button>
                <button type="button" onClick={onToggleLang}>
                    {lang ? '아랍어 -> 영어' : '영어 -> 아랍어'}
                </button>
                <input type="submit" value="단어장 추가" />
            </form>
            <div>
                <ul>
                    {words
                        .filter(word => word.creator === user.uid)
                        .map(word => <Word
                            key={word.id}
                            word={word}
                            collectionPath={collectionPath}
                        /> )}
                </ul>
            </div>
        </div>
    );
}

export default Home;