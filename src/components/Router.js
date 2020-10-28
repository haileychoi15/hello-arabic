import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import List from 'routes/List';
import Navigation from 'components/Navigation';
import Translate from 'routes/Translate';

function AppRouter ({ login }) {
    const collectionPath = 'words';
    const CustomRoute = (props) => {
        if (login) return <Route {...props} />
        return <Route exact path="/" render={() => <Auth />} />
    }
    return(
        <Router>
            <Switch>
                <CustomRoute exact path="/" render={() => <Home collectionPath={collectionPath} />} />
                <CustomRoute exact path="/wordlist" render={() => <List collectionPath={collectionPath} />} />
                <CustomRoute exact path="/translate" render={() => <Translate />} />
            </Switch>
            {login && <Navigation />}
        </Router>
    )
}

export default AppRouter;