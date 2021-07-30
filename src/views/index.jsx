import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// @Pages
import Home from './pages/Home/Home.component';
import Game from './pages/Game/Game.component';
import NotFoundPage from './pages/NotFound/NotFound.component';

/**
 * Declare all route here
 * @returns JSX
 */
function Root() {
    return (
        <Router>
            <Switch>
                {/* By default load '/home' path */}
                <Redirect exact from='/' to='/home' />

                {/* Home Route */}
                <Route path='/home'>
                    <Home />
                </Route>

                {/* Game Page Route */}
                <Route path='/game'>
                    <Game />
                </Route>

                {/* Not Found Page */}
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
}

export default Root;
