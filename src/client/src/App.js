import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContextProvider';
import ProtectedRoute from './components/ProtectedRoute/index';
import ROUTES from './constants/routes';
import Navigation from './components/Navigation/index';
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
    const { setIsAuth } = useContext(AuthContext);

    /// >>> Temporary
    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch('/auth/check');
            if (response.status === 401) {
                setIsAuth(false);
                return;
            }
            if (response.status === 200) {
                setIsAuth(true);
                return;
            }
        };
        checkAuth();
    }, [setIsAuth]);
    // <<<

    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route path={ROUTES.signup} exact>
                        <Signup />
                    </Route>
                    <Route path={ROUTES.login} exact>
                        <Login />
                    </Route>
                    <ProtectedRoute path={ROUTES.profile} exact>
                        <Profile />
                    </ProtectedRoute>
                    <ProtectedRoute path={ROUTES.settings} exact>
                        <Settings />
                    </ProtectedRoute>
                    <ProtectedRoute path={ROUTES.chat} exact>
                        <Chat />
                    </ProtectedRoute>
                    <ProtectedRoute path={ROUTES.messages} exact>
                        <Messages />
                    </ProtectedRoute>
                    <Route path={ROUTES.home} exact>
                        <Home />
                    </Route>
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
            </Router>
            <GlobalStyle />
        </>
    );
}

export default App;
