import React, {useEffect, useState} from 'react';
import AppRouter from 'components/Router';
import { authService } from 'myFirebase';
import { UserContext } from 'Context';
import GlobalStyles from 'components/GlobalStyles';
import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #efefef;
  //background-color: #202020;
`;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
    const [init, setInit] = useState(false);
    const [userObj, setUserObj] = useState(null);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUserObj(user);
            }
            setInit(true);
        });
    }, []);
    return (
        <BodyContainer>
            <GlobalStyles />
            <Container>
                <UserContext.Provider value={[userObj, setUserObj]}>
                    {init ? <AppRouter login={Boolean(userObj)} />
                          : <Loading>로딩중 ...</Loading>
                    }
                </UserContext.Provider>
            </Container>
        </BodyContainer>
    );
}

export default App;
