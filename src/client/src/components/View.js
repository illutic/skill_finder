import React from 'react';
import { Switch, Route } from 'react-router-dom';

const View = () => {
    return (
        <Switch>
            <Route path="/signup" exact>
                Signup View
            </Route>
            <Route path="/login" exact>
                Login View
            </Route>
            <Route path="/profile/:id" exact>
                Profile View
            </Route>
            <Route path="/settings" exact>
                Settings View
            </Route>
            <Route path="/messages/:id" exact>
                Messages Room View
            </Route>
            <Route path="/messages" exact>
                Messages View
            </Route>
            <Route path="/" exact>
                Home View
            </Route>
        </Switch>
    );
};

export default View;
