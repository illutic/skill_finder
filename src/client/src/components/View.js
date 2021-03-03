import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from '../views/Signup';
import Login from '../views/Login';
import Profile from '../views/Profile';
import Settings from '../views/Settings';
import Chat from '../views/Chat';
import Messages from '../views/Messages';
import Home from '../views/Home';

const View = () => {
    return (
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
    );
};

export default View;
