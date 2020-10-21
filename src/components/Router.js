import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import List from 'routes/List';
import Navigation from 'components/Navigation';

function AppRouter ({ isLoggedIn }) {
    return(
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn
                    ? (
                        <>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/wordlist">
                                <List />
                            </Route>
                        </>
                    )
                    : (
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    )}
            </Switch>
        </Router>
    )
}

export default AppRouter;