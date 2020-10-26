import React, {useState} from 'react';
import axios from 'axios';

function Translate() {
    const [results, setResults] = useState('');

    const kakaoTranslate = async () => {
        const appKey = '6aa6692a52d725027c5e744e1bdf862a';
        const HTTP = axios.create({
            baseURL: 'https://dapi.kakao.com',
            headers: {
                Authorization: `KakaoAK ${appKey}`
            }
        });
        const data = {
            query: "سَافرت إلى نيويورك لِحضُور الاجتماعَ",
            srcLang: 'ar',
            targetLang: 'kr'
        };
        const {data : { translated_text }} = await HTTP.get(`/v2/translation/translate?query=${data.query}&src_lang=${data.srcLang}&target_lang=${data.targetLang}`);
        setResults(translated_text.join(', '));
    }



    const googleTranslate = async () => {
        const appKey = process.env.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS;
        const HTTP = axios.create({
            baseURL: 'https://translation.googleapis.com',
            headers: {
                Authorization: `Bearer ${appKey}`,
                "Content-Type": "application/json; charset=utf-8"
            }
        });

        const data =
            {
                "q": "hello",
                "source": "en",
                "target": "es",
                "format": "text"
            };
        //     {
        //     q: "سَافرت إلى نيويورك لِحضُور الاجتماعَ",
        //     source: 'ar',
        //     target: 'kr',
        //     format: 'text'
        // };

        const response = await HTTP.post(`/language/translate/v2`, data);
        console.log(response);
    }

    const [value, setValue] = useState('');
    const onChange = (e) => {
        const { value } = e.target;
        setValue(value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        // kakaoTranslate();
        googleTranslate();
    }
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <textarea rows="10" cols="30" placeholder="내용을 입력해주세요." value={value} onChange={onChange}/>
                <textarea rows="10" cols="30" placeholder="번역된 내용입니다." value={results} readOnly />
                <input type="submit" value="번역하기" />
            </form>
        </div>
    );
}

export default Translate;