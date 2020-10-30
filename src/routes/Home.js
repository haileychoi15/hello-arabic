import React, {useContext, useState} from 'react';
import {dbService} from "myFirebase";
import {UserContext} from "Context";
import Result from "components/Result";
import {getWordResult} from "services/API";
import styled from 'styled-components';
import {AiFillCloseCircle, AiFillPlusCircle} from 'react-icons/ai';

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const InputContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    border: 2px solid #e8e8e8;
    border-radius: 8px;
    padding: 0.3rem 0.7rem;
    margin-bottom: 1rem;
`;

const Input = styled.input`
  flex-basis: 90%;
  height: 100%;
  font-size: 1.1rem;
  &::placeholder {
    font-size: 0.8rem;
    color: #d2d2d2;
  }
`;

const ResetButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d2d2d2;
  font-size: 1.2rem;
  transform: translateY(-50%);
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 2px solid #333;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: #333;
`;

const ResultBlock = styled.div`
  
`;

const AddButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #d2d2d2;
  font-size: 0.8rem;
`;

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  font-size: 1.6rem;
  color: #d2d2d2;
`;

function Home({ collectionPath }) {
    const userObj = useContext(UserContext)[0];
    const [inputValue, setInputValue] = useState('');
    const [submitValue, setSubmitValue] = useState(inputValue);
    const [lang, setLang] = useState(true); // arabic
    const [added, setAdded] = useState(false);
    const [results, setResults] = useState(null);
    const [message, setMessage] = useState('');

    const onToggleAdd = async () => {
        const date = new Date();
        const data = await dbService.collection(collectionPath).add({
            creator: userObj.uid,
            word: submitValue,
            date
        });
        if(data) setAdded(true);
    }

    const onChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
        setAdded(false);
    }

    const onToggleLang = () => {
        setLang(lang => !lang);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setResults(null);
        setSubmitValue(inputValue);

        const hasVal = inputValue.length;
        setMessage( hasVal ? '결과를 가져오는 중...' : '단어를 입력해주세요.');
        if (!hasVal) return false;

        const test = 'زَهْرَة';
        const result = await getWordResult("تمشى");
        result.length ? setResults(result) : setMessage('검색결과가 없습니다.');
    }
    return (
        <HomeContainer>
            <Form action="" onSubmit={onSubmit}>
                <button type="button" onClick={onToggleLang}>
                    {!lang ? '아랍어 => 영어' : '영어 => 아랍어'}
                </button>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder="검색..."
                        lang="ar"
                        maxLength={30}
                        value={inputValue}
                        onChange={onChange} />
                    <ResetButton type="button" onClick={() => setInputValue('')}>
                        <AiFillCloseCircle />
                    </ResetButton>
                </InputContainer>
                {/*<SearchButton type="submit">
                    단어찾기
                </SearchButton>*/}
            </Form>
            <div>
               <div>
                   {results ? <Result results={results} />
                       : <span>{message}</span>
                   }
               </div>
            </div>
            <div>
                {results &&
                <AddButtonBlock>
                    <span>보관함에 추가</span>
                    <AddButton onClick={onToggleAdd}>
                        <AiFillPlusCircle />
                    </AddButton>
                </AddButtonBlock>
                }
                {added &&
                <span>단어장에 추가되었습니다.</span>
                }
            </div>
        </HomeContainer>
    );
}

export default Home;