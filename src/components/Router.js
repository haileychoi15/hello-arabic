import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import List from 'routes/List';
import Navigation from 'components/Navigation';
import Translate from 'routes/Translate';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 88%;
  padding: 1rem;
  background-color: #202020;
`;

const NavContainer = styled.div`
  width: 100%;
  height: 12%;
  padding: 1rem;
  background-color: #202020;
`;

function AppRouter ({ login }) {
    const collectionPath = 'words';
    const CustomRoute = (props) => {
        if (login) return <Route {...props} />
        return <Route exact path="/" render={() => <Auth />} />
    }
    return(
        <Router>
            <Switch>
                <AppContainer>
                    <CustomRoute exact path="/" render={() => <Home collectionPath={collectionPath} />} />
                    <CustomRoute exact path="/wordlist" render={() => <List collectionPath={collectionPath} />} />
                    <CustomRoute exact path="/translate" render={() => <Translate collectionPath={collectionPath} />} />
                </AppContainer>
            </Switch>
                <NavContainer>
                    {login && <Navigation />}
                </NavContainer>
        </Router>
    )
}

export default AppRouter;