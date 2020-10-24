import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import List from 'routes/List';
import Navigation from 'components/Navigation';

function AppRouter ({ login }) {
    const CustomRoute = (props) => {
        if (login) return <Route {...props} />
        return <Route exact path="/" render={() => <Auth />} />
    }
    return(
        <Router>
            {login && <Navigation />}
            <Switch>
                <CustomRoute exact path="/" render={() => <Home />} />
                <CustomRoute exact path="/wordlist" render={() => <List />} />
            </Switch>
        </Router>
    )
}

export default AppRouter;