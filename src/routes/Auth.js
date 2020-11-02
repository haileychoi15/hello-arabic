import React, {useState} from 'react';
import { firebaseInstance, authService } from 'myFirebase';
import styled from 'styled-components';
import {ImEyeBlocked, ImEye} from 'react-icons/im';

const AuthContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
  color: #eee;
  background-color: #202020;
`;

const AccountButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: #ffed97;
`;

const Form = styled.form`
  width: 100%;
  transform: translateY(-10%);
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #848484;
  border-radius: 8px;
  padding: 0 1rem;
  color: #eee;
  &:focus {
    border: 1px solid #ffed97;
  }
`;

const PasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  font-size: 1rem;
  color: #eee;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid #ffed97;
  border-radius: 20px;
  margin-bottom: 1rem;
  color: #333;
  background-color: #ffed97;
  &.google {
    color: #ffed97;
    background: none;
  }
`;

const MessageBlock = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(false);
    const [message, setMessage] = useState('');
    const [passwordType, setPasswordType] = useState(true);

    const onChange = (e) => {
        setMessage('');
        const {name, value} = e.target;
        if (name === 'email') setEmail(value);
        else if (name === 'password') setPassword(value);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            if (newAccount) {
                await authService.createUserWithEmailAndPassword(email, password);
            } else {
                await authService.signInWithEmailAndPassword(email, password);
            }
        } catch (error) {
            setMessage(error.message);
        }
    }

    const toggleAccount = () => {
        setNewAccount(prev => !prev);
        setEmail('');
        setPassword('');
        setPasswordType(true);
        setMessage('');
    };

    const onSocialClick = async () => {
        const provider = new firebaseInstance.auth.GoogleAuthProvider();
        await authService.signInWithPopup(provider);
        //console.log(data.additionalUserInfo.profile.email);
    }


    return (
        <AuthContainer>
            <AccountButton onClick={toggleAccount}>
                {newAccount ? '로그인' : '계정 등록'}
            </AccountButton>
            <Form onSubmit={onSubmit}>
                <InputContainer>
                    <Input name="email"
                           type="text"
                           placeholder="이메일"
                           value={email}
                           onChange={onChange}
                           required
                    />
                </InputContainer>
                <InputContainer>
                    <Input name="password"
                           type={passwordType ? 'password' : 'text'}
                           placeholder="비밀번호"
                           value={password}
                           onChange={onChange}
                           required
                    />
                    {Boolean(password.length) &&
                        <PasswordButton type="button" onClick={() => setPasswordType(prev => !prev)}>
                            {passwordType ? <ImEyeBlocked /> : <ImEye />}
                        </PasswordButton>
                    }
                </InputContainer>
                {Boolean(message.length) &&
                <MessageBlock>
                    {message}
                </MessageBlock>
                }
                <SubmitButton type="submit">
                    {newAccount ? "계정 등록" : "로그인"}
                </SubmitButton>
                {!newAccount &&
                <SubmitButton onClick={onSocialClick} className="google">Google 계정으로 로그인</SubmitButton>
                }
            </Form>
        </AuthContainer>
    );
}

export default Auth;