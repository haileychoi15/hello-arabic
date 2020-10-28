import React, {useState} from 'react';
import axios from 'axios';

function Translate() {
    const [value, setValue] = useState('');
    const [results, setResults] = useState('');
    const [sourceLang, setSourceLang] = useState('ar');
    const [targetLang, setTargetLang] = useState('en');

    const googleTranslate = async () => {
        const appKey = '241c526f87mshf4e9baee728bb10p1d98f4jsndd2aa29b9744';
        const http = axios.create({
            baseURL: 'https://google-translate20.p.rapidapi.com',
            headers : {
                'x-rapidapi-host': 'google-translate20.p.rapidapi.com',
                'x-rapidapi-key': appKey
            }
        });
        const request = {
            text: 'مَاذَا أَعْجَبكُمْ فِي بَلَدِنَا؟',
            sourceLang,
            targetLang
        }
        const {data : { data : { translation } }} = await http.get(`/translate?text=${request.text}&sl=${request.sourceLang}&&tl=${request.targetLang}`);
        setResults(translation);
    }

    const onInputChange = (e) => {
        const { value } = e.target;
        setValue(value);
    }

    const onLangSwitch = () => {
        const tempLang = sourceLang;
        setSourceLang(targetLang);
        setTargetLang(tempLang);
    }

    const onLangChange = (e) => {
        const { name, value } = e.target;
        if (name === 'source-langs') {
            setSourceLang(value);
        }
        else if (name === 'target-langs') {
            setTargetLang(value);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //googleTranslate();
    }
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <select name="source-langs" id="source-context" value={sourceLang} onChange={onLangChange}>
                    <option value="ar">아랍어</option>
                    <option value="en">영어</option>
                    <option value="ko">한국어</option>
                </select>
                <textarea id="source-context" rows="10" cols="30" placeholder="내용을 입력해주세요." value={value} onChange={onInputChange}/>

                <button onClick={onLangSwitch}>언어 스위치</button>

                <select name="target-langs" id="source-context" value={targetLang} onChange={onLangChange}>
                    <option value="ar">아랍어</option>
                    <option value="en">영어</option>
                    <option value="ko">한국어</option>
                </select>
                <textarea id="target-context" rows="10" cols="30" placeholder="번역된 결과를 얻는데 2초가 소요됩니다." value={results} readOnly />
                <input type="submit" value="번역하기" />
            </form>
        </div>
    );
}

export default Translate;