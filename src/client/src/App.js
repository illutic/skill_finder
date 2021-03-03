import React from 'react';
import Navigation from './components/Navigation/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './containers/Signup/index';
import Login from './containers/Login/index';
import Profile from './containers/Profile/index';
import Settings from './containers/Settings/index';
import Chat from './containers/Chat/index';
import Messages from './containers/Messages/index';
import Home from './containers/Home/index';
import GlobalStyle from './styles/globalStyle';

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/signup" exact>
                        <Signup />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/profile/:id" exact>
                        <Profile />
                    </Route>
                    <Route path="/settings" exact>
                        <Settings />
                    </Route>
                    <Route path="/messages/:id" exact>
                        <Chat />
                    </Route>
                    <Route path="/messages" exact>
                        <Messages />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </Switch>
            </Router>
            <GlobalStyle />
        </div>
    );
}

export default App;
