import React, {useEffect, useState} from 'react';
import {dbService} from "../myFirebase";

function Home() {
    const [value, setValue] = useState('');
    const [lang, setLang] = useState(true); // arabic
    const [added, setAdded] = useState(false);
    const [list, setList] = useState([]);

    const getWords = async () => {
        const words = await dbService.collection("words").get();
        words.forEach(document => {
            const wordObject = {
                ...document.data(),
                id: document.id
            }
            setList(prev => [wordObject, ...prev]);
        });
    }

    useEffect(() => {
        getWords();
    },[]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await dbService.collection('words').add({
            word: value,
            date: Date.now()
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

    console.log(list);
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
                    {list.map(word => <li key={word.id}>{word.word}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Home;