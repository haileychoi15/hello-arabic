import React, {useCallback, useState} from 'react';
import Result from 'components/Result';
import {getWordResult} from "services/API";
import styled, {css} from 'styled-components';
import MenuBlock from 'components/MenuBlock';
import {AiOutlineCloseCircle, AiOutlineSearch} from 'react-icons/ai';

const borderStyles = css`
    ${prop => (prop.position === 'right')
    ? css`
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;`
    : css`
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    `}
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 2rem;
`;

const Li = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    border: 1px solid #ffed97;
    & button {
      color: #ffed97;
    }
    background-color: rgba(0, 0, 0, 0);
    &.active {
      & button {
         color: #333;
      }
      background-color: #ffed97;
    }
    ${borderStyles}
`;

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const InputContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 45px;
    border: none;
    margin-bottom: 1rem;
    @media screen and (min-width: 30rem) {
      width: 375px;
      margin: 0 auto 2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #848484;
  border-radius: 22px;
  padding: 0.3rem 2rem 0.3rem 1rem;
  font-size: 1.1rem;
  color: #d2d2d2;
  caret-color: #848484;
  &:active,
  &:focus {
    border: 1px solid #ffed97;
  }
  @media screen and (min-width: 30rem) {
    padding: 0.5rem 2rem 0.5rem 1rem;
    font-size: 1.2rem;
  }
`;

const ResetButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #848484;
  font-size: 1.2rem;
  transform: translateY(-50%);
`;

const Placeholder = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #848484;
  transform: translateY(-50%);
`;

const PlaceholderText = styled.span`
  margin-left: 0.3rem;
  font-size: 0.8rem;
  font-weight: 400;
`;

const ResultContainer = styled.div`
   width: 100%;
   flex-grow: 1;
   overflow-y: scroll;
   -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 30rem) {
    width: 90%;
    margin: 0 auto;
  }
  @media screen and (min-width: 48rem) {
    width: 70%;
  }
`;

const MessageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;

function Home({ collectionPath }) {

    const initialLangList = [
        {
            text : '아랍어',
            position: 'left',
            active: true,
        },
        {
            text : '영어',
            position: 'right',
            active: false,
        }
    ]
    const [langList, setLangList] = useState(initialLangList);
    const [lang, setLang] = useState(true); // arabic
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState(null);
    const [message, setMessage] = useState('');

    const onSubmit = useCallback(async (e) => {
        e.preventDefault();
        setResults(null);

        const hasVal = inputValue.length;
        setMessage( hasVal ? '결과를 가져오는 중...' : '단어를 입력해주세요.');
        if (!hasVal) return false;

        const result = await getWordResult(inputValue, lang);
        result.length ? setResults(result) : setMessage('검색결과가 없습니다.');
    }, [inputValue, lang]);

    const onChange = useCallback(e => {
        const { value } = e.target;
        setInputValue(value);
    }, []);

    const onLangClick = useCallback((index) => {
        (index === 0) ? setLang(true) : setLang(false);
        setLangList(langList.map((item, i) => (index === i)
        ? {...item, active: true}
        : {...item, active: false}));
    }, [langList]);

    return (
        <HomeContainer>
            <MenuBlock menu="Word Search" />
            <Ul>
                {langList.map((item, index) =>
                    <Li key={index} onClick={() => onLangClick(index)} className={item.active? 'active' : ''} position={item.position}>
                        <button type="button">{item.text}</button>
                    </Li>
                )}
            </Ul>
            <Form action="" onSubmit={onSubmit}>
                <InputContainer>
                    <Input
                        type="text"
                        lang={lang ? 'ar' : 'en'}
                        value={inputValue}
                        onChange={onChange}
                    />
                    {Boolean(inputValue.length)
                        ? <ResetButton type="button" onClick={() => setInputValue('')}>
                            <AiOutlineCloseCircle />
                          </ResetButton>
                        : <Placeholder>
                            <AiOutlineSearch />
                            <PlaceholderText>검색</PlaceholderText>
                          </Placeholder>
                    }
                </InputContainer>
            </Form>
            <ResultContainer>
                <>
                   {results ? <Result results={results} collectionPath={collectionPath} />
                       : <MessageBlock>{message}</MessageBlock>
                   }
                </>
            </ResultContainer>
        </HomeContainer>
    );
}

export default Home;