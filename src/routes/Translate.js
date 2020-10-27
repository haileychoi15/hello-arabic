import React, {useState} from 'react';
import axios from 'axios';

function Translate() {
    const [results, setResults] = useState('');

    const kakaoTranslate = async () => {
        const appKey = '6aa6692a52d725027c5e744e1bdf862a';
        const http = axios.create({
            baseURL: 'https://dapi.kakao.com',
            headers: {
                Authorization: `KakaoAK ${appKey}`
            }
        });
        const request = {
            text: "سَافرت إلى نيويورك لِحضُور الاجتماعَ",
            sourceLang: 'ar',
            targetLang: 'kr'
        };
        const {data : { translated_text }} = await http.get(`/v2/translation/translate?query=${request.text}&src_lang=${request.sourceLang}&target_lang=${request.targetLang}`);
        setResults(translated_text.join(', '));
    }

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
            sourceLang: 'ar',
            targetLang: 'ko'
        }
        const {data : { data : { translation } }} = await http.get(`/translate?text=${request.text}&sl=${request.sourceLang}&&tl=${request.targetLang}`);
        setResults(translation);
    }

    const [value, setValue] = useState('');
    const onChange = (e) => {
        const { value } = e.target;
        setValue(value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        //kakaoTranslate();
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