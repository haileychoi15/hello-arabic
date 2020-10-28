import React, {useContext, useState} from 'react';
import {dbService} from "myFirebase";
import {UserContext} from "Context";
import Result from "components/Result";
import {getWordResult} from "services/API";

function Home({ collectionPath }) {
    const userObj = useContext(UserContext)[0];
    const [value, setValue] = useState('');
    const [lang, setLang] = useState(true); // arabic
    const [added, setAdded] = useState(false);
    const [results, setResults] = useState(null);
    const [message, setMessage] = useState('');

    const onToggleAdd = async () => {
        const date = new Date();
        const data = await dbService.collection(collectionPath).add({
            creator: userObj.uid,
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

    const onSubmit = async (e) => {
        e.preventDefault();
        setResults(null);

        const hasVal = value.length;
        setMessage( hasVal ? '결과를 가져오는 중...' : '단어를 입력해주세요.');
        if (!hasVal) return false;

        const test = 'زَهْرَة';
        const result = await getWordResult(value);
        result.length ? setResults(result) : setMessage('검색결과가 없습니다.');
    }
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder={lang ? '아랍어 => 영어' : '영어 => 아랍어'}
                    lang="ar"
                    maxLength={30}
                    value={value}
                    onChange={onChange} />
                {added &&
                <span>단어장에 추가되었습니다.</span>
                }
                <button type="submit">
                    단어찾기
                </button>
                <button type="button" onClick={onToggleLang}>
                    {!lang ? '아랍어 => 영어' : '영어 => 아랍어'}
                </button>
                {results &&
                    <input type="button" onClick={onToggleAdd} value="단어장 추가" />
                }
            </form>
            <div>
               {results ? <Result results={results} />
                        : <span>{message}</span>
               }
            </div>
        </div>
    );
}

export default Home;