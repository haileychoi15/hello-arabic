import React, {useCallback, useContext, useState} from 'react';
import styled from 'styled-components';
import {dbService} from 'myFirebase';
import {googleTranslate} from 'services/API';
import {MdSwapHoriz} from 'react-icons/md'
import {MdBookmarkBorder, MdBookmark} from 'react-icons/md';
import {UserContext} from 'Context';
import MenuBlock from 'components/MenuBlock';
import {AiOutlineCloseCircle} from "react-icons/ai";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 30rem) {
    width: 70%;
    margin: 0 auto;
  }
  @media screen and (min-width: 30rem) {
    width: 40%;
    min-width: 400px;
  }
`;

const LangContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem;
`;


const SelectBlock = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: 1px solid #ffed97;
  border-radius: 20px;
  background: none;
`;

const Select = styled.select`
  width: 60px;
  border: none;
  color: #ffed97;
  background: none;
`;

const SwitchButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: #ffed97;
`;

const TextareaBlock = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #404040;
  border-radius: 8px;
  padding: 0.5rem 1.5rem 0.5rem 0.5rem;  
  margin-bottom: 1rem;
  color: #eee;
  background-color: #303030;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
  font-size: 1.1rem;
  background: none;
  color: #eee;
  resize: none;
  &::placeholder {
    font-size: 0.9rem;
  }
`;

const ResetButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #848484;
  font-size: 1.2rem;
  transform: translateY(-50%);
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  margin-bottom: 1rem;
  color: #333;
  background: #ffed97;
  @media screen and (min-width: 30rem) {
    width: 100px;
    margin: 0 0 5rem auto;
  }
`;

const AddButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #ffed97;
  @media screen and (min-width: 30rem) {
    font-size: 1.6rem;
    color: #848484;
    transition: all 150ms ease-in-out;
    &:hover {
      color: #ffed97;
    }
`;

const MessageBlock = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.9rem;
`;

function Translate({ collectionPath }) {
    const userObj = useContext(UserContext)[0];
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState('');
    const [add, setAdd] = useState(false);
    const [dataId, setDataId] = useState('');
    const [sourceLang, setSourceLang] = useState('ar');
    const [targetLang, setTargetLang] = useState('en');
    const [message, setMessage] = useState('');

    const onInputChange = useCallback((e) => {
        const { value } = e.target;
        setInputValue(value);
        setMessage('');
    }, []);

    const onLangSwitch = useCallback(() => {
        const tempLang = sourceLang;
        setSourceLang(targetLang);
        setTargetLang(tempLang);
    }, [sourceLang, targetLang]);

    const onLangChange = useCallback((e) => {
        const { name, value } = e.target;
        if (name === 'source-langs') {
            setSourceLang(value);
        }
        else if (name === 'target-langs') {
            setTargetLang(value);
        }
    }, []);

    const onSubmit = useCallback(async (e) => {
        e.preventDefault();
        setAdd(false);

        const hasVal = inputValue.length;
        setResults('');
        setMessage( hasVal ? '결과를 가져오는 중...' : '내용을 입력해주세요.');
        if (!hasVal) return false;

        const result = await googleTranslate(inputValue, sourceLang, targetLang);
        result.length ? setResults(result) : setMessage('검색결과가 없습니다.');
    }, [inputValue, sourceLang, targetLang]);

    const saveResult = useCallback(async () => {
        const date = new Date();
        const { id } = await dbService.collection(collectionPath).add({
            creator: userObj.uid,
            sourceLang,
            targetLang,
            sourceValue: inputValue,
            targetValue: results,
            date
        });
        setDataId(id);
    }, [collectionPath, userObj.uid, sourceLang, targetLang, inputValue, results]);

    const deleteResult = useCallback(async () => {
        await dbService.doc(`${collectionPath}/${dataId}`).delete();
    }, [collectionPath, dataId]);

    const onAddClick = useCallback(() => {
        add ? deleteResult() : saveResult();
        setAdd(prev => !prev);
    }, [add, deleteResult, saveResult]);

    return (
        <>
            <MenuBlock menu="Translate" />
            <Form action="" onSubmit={onSubmit}>
                <LangContainer>
                    <SelectBlock>
                        <Select name="source-langs" value={sourceLang} onChange={onLangChange}>
                            <option value="ar">아랍어</option>
                            <option value="en">영어</option>
                            <option value="ko">한국어</option>
                        </Select>
                    </SelectBlock>
                    <SwitchButton type="button" onClick={onLangSwitch}>
                        <MdSwapHoriz />
                    </SwitchButton>
                    <SelectBlock>
                        <Select name="target-langs" value={targetLang} onChange={onLangChange}>
                            <option value="ar">아랍어</option>
                            <option value="en">영어</option>
                            <option value="ko">한국어</option>
                        </Select>
                    </SelectBlock>
                </LangContainer>
                <TextareaBlock>
                    <Textarea id="source-context" rows="6" placeholder="내용을 입력해주세요." value={inputValue} onChange={onInputChange} />
                    {Boolean(inputValue.length) &&
                        <ResetButton type="button" onClick={() => setInputValue('')}>
                            <AiOutlineCloseCircle />
                        </ResetButton>
                    }
                </TextareaBlock>
                <SubmitButton type="submit">번역하기</SubmitButton>
                {Boolean(results.length)
                    ? <>
                        <TextareaBlock>
                            <Textarea id="target-context" rows="6" placeholder="번역 결과입니다." value={results} readOnly />
                            <AddButton type="button" onClick={onAddClick}>
                                {add ? <MdBookmark /> : <MdBookmarkBorder />}
                            </AddButton>
                        </TextareaBlock>
                    </>
                    : <MessageBlock>{message}</MessageBlock>
                }
            </Form>
        </>
    );
}

export default Translate;