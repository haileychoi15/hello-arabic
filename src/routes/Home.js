import React, {useEffect, useState} from 'react';
import {dbService} from "../myFirebase";

function Home({ user }) {
    const [value, setValue] = useState('');
    const [lang, setLang] = useState(true); // arabic
    const [added, setAdded] = useState(false);
    const [list, setList] = useState([]);
    const collectionPath = 'words';

    useEffect(() => {
        dbService.collection(collectionPath).onSnapshot(snapshot => {
            const words = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setList(words);
        });
    },[]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const date = new Date().toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const data = await dbService.collection(collectionPath).add({
            user: user.uid,
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
                <input type="text" placeholder="단어를 입력하세요." lang="ar" maxLength={30} value={value} onChange={onChange} />
                {added && <span>단어장에 추가되었습니다.</span>}
                <button type="button" onClick={onToggleSearch}>단어찾기</button>
                <button type="button" onClick={onToggleLang}>
                    {lang ? '아랍어 -> 영어' : '영어 -> 아랍어'}
                </button>
                <input type="submit" value="단어장 추가" />
            </form>
            <div>
                <ul>
                    {list.map(word =>
                        <li key={word.id}>
                            {word.word}<span>{word.date}</span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Home;