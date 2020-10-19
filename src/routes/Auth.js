import React, {useState} from 'react';
import { firebaseInstance, authService } from 'myFirebase';

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState('');

    const onChange = (e) => {
        const {name, value} = e.target;
        if (name === 'email') setEmail(value);
        else if (name === 'password') setPassword(value);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                data = await authService.signInWithEmailAndPassword(email, password);
            }
        } catch (error) {
            setError(error.message);
        }
    }

    const toggleAccount = () => setNewAccount(prev => !prev);

    const onSocialClick = async (e) => {
        const provider = new firebaseInstance.auth.GoogleAuthProvider();
        const data = await authService.signInWithPopup(provider);
        console.log(data.additionalUserInfo.profile.email);
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="email"
                       type="text"
                       placeholder="이메일"
                       value={email}
                       onChange={onChange}
                       required
                />
                <input name="password"
                       type="password"
                       placeholder="비밀번호"
                       value={password}
                       onChange={onChange}
                       required
                />
                <input type="submit" value={newAccount ? "계정 등록" : "로그인"} />
                {error}
            </form>
            <div>
                <button onClick={toggleAccount}>
                    {newAccount ? '로그인' : '계정 등록'}
                </button>
            </div>
            <div>
                <button onClick={onSocialClick}>구글 계정으로 로그인</button>
            </div>
        </div>
    );
}

export default Auth;