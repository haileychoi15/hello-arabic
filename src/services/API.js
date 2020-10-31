import React from 'react';
import axios from "axios";

export const getWordResult = async (word, lang) => {
    const langs = lang ? 'AR-EN' : 'EN-AR';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = process.env.REACT_APP_ARATOOLS_URL;
    const query = process.env.REACT_APP_ARATOOLS_QUERY;
    const http = axios.create({
        baseURL: proxyUrl + targetUrl
    });
    const { data : { result } } = await http.get(`${query}{"word": "${word}", "dictionary": "${langs}-WORD-DICTIONARY"}&format=json`);
    return result;
}

export const googleTranslate = async (text, sourceLang, targetLang) => {
    const appKey = process.env.REACT_APP_GOOGLE_TRANSLATE_APP_KEY;
    const http = axios.create({
        baseURL: 'https://google-translate20.p.rapidapi.com',
        headers : {
            'x-rapidapi-host': 'google-translate20.p.rapidapi.com',
            'x-rapidapi-key': appKey
        }
    });
    const {data : { data : { translation } }} = await http.get(`/translate?text=${text}&sl=${sourceLang}&tl=${targetLang}`);
    return translation;
}