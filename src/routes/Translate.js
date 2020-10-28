import React, {useState} from 'react';
import {googleTranslate} from 'services/API';

function Translate() {
    const [value, setValue] = useState('');
    const [results, setResults] = useState('');
    const [sourceLang, setSourceLang] = useState('ar');
    const [targetLang, setTargetLang] = useState('en');

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

    const onSubmit = async (e) => {
        e.preventDefault();
        const text = 'مَاذَا أَعْجَبكُمْ فِي بَلَدِنَا؟';
        //const result = await googleTranslate(text, sourceLang, targetLang);
        //setResults(result);
    }
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <select name="source-langs" value={sourceLang} onChange={onLangChange}>
                    <option value="ar">아랍어</option>
                    <option value="en">영어</option>
                    <option value="ko">한국어</option>
                </select>
                <textarea id="source-context" rows="10" cols="30" placeholder="내용을 입력해주세요." value={value} onChange={onInputChange}/>

                <button onClick={onLangSwitch}>언어 스위치</button>

                <select name="target-langs" value={targetLang} onChange={onLangChange}>
                    <option value="ar">아랍어</option>
                    <option value="en">영어</option>
                    <option value="ko">한국어</option>
                </select>
                <textarea id="target-context" rows="10" cols="30" placeholder="번역 결과입니다." value={results} readOnly />
                <input type="submit" value="번역하기" />
            </form>
        </div>
    );
}

export default Translate;