import React, {useState} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import List from 'routes/List';
import Navigation from 'components/Navigation';
import Translate from 'routes/Translate';
import User from 'routes/User';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 88%;
  padding: 1rem;
  background-color: #202020;
`;

const AppBlock = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  &.show {
    display: block;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  height: 12%;
  padding: 0 1rem;
  background-color: #202020;
  @media screen and (min-width: 375px) {
    padding: 1rem;
  }
`;

function AppRouter ({ login }) {
    return(
        <>
        {login
            ? <>
                <AppContainer>
                    <AppBlock className="app home show">
                        <Home collectionPath="words" />
                    </AppBlock>
                    <AppBlock className="app translate">
                        <Translate collectionPath="translate" />
                    </AppBlock>
                    <AppBlock className="app list">
                        <List />
                    </AppBlock>
                    <AppBlock className="app user">
                        <User />
                    </AppBlock>
                </AppContainer>
                <NavContainer>
                    <Navigation />
                </NavContainer>
              </>
            : <Home />}
        </>
    )
}

export default AppRouter;