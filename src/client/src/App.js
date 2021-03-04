import React from 'react';
import Navigation from './components/Navigation/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTES from './constants/routes';
import Signup from './containers/Signup/index';
import Login from './containers/Login/index';
import Profile from './containers/Profile/index';
import Settings from './containers/Settings/index';
import Chat from './containers/Chat/index';
import Messages from './containers/Messages/index';
import Home from './containers/Home/index';
import Page404 from './containers/Page404/index';
import GlobalStyle from './styles/globalStyle';

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route path={ROUTES.signup} exact>
                        <Signup />
                    </Route>
                    <Route path={ROUTES.login} exact>
                        <Login />
                    </Route>
                    <Route path={ROUTES.profile} exact>
                        <Profile />
                    </Route>
                    <Route path={ROUTES.settings} exact>
                        <Settings />
                    </Route>
                    <Route path={ROUTES.chat} exact>
                        <Chat />
                    </Route>
                    <Route path={ROUTES.messages} exact>
                        <Messages />
                    </Route>
                    <Route path={ROUTES.home} exact>
                        <Home />
                    </Route>
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
            </Router>
            <GlobalStyle />
        </div>
    );
}

export default App;
