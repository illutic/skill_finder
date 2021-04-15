import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import './matchMedia.mock';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { act as testAct, create } from 'react-test-renderer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArrowButton from '../components/ArrowButton';
import AttachButton from '../components/ArrowButton';
import AuthForm from '../components/AuthForm';
import AuthMessage from '../components/AuthMessage';
import Button from '../components/Button';
import Chat from '../components/Chat';
import ChatsMessage from '../components/ChatsMessage';
import CloseButton from '../components/CloseButton';
import ContactsDrawer from '../components/ContactsDrawer';
import Container from '../components/Container';
import Drawer from '../components/Drawer';
import FilesDrawer from '../components/FilesDrawer';
import FormError from '../components/FormError';
import FormSuccess from '../components/FormSuccess';
import GoogleButton from '../components/GoogleButton';
import Heading from '../components/Heading';
import Home from '../components/Home';
import HomeSlider from '../components/HomeSlider';
import LoadingScreen from '../components/LoadingScreen';
import Login from '../components/Login';
import LogoutModal from '../components/LogoutModal';
import Messages from '../components/Messages';
import Navigation from '../components/Navigation';
import NavigationButton from '../components/NavigationButton';
import NotFound from '../components/NotFound';
import Notification from '../components/Notification';
import NotificationsButton from '../components/NotificationsButton';
import NotificationsPanel from '../components/NotificationsPanel';
import Profile from '../components/Profile';
import ProfilePhoto from '../components/ProfilePhoto';
import ProfileThumbnail from '../components/ProfileThumbnail';
import ProtectedRoute from '../components/ProtectedRoute';
import RequestActions from '../components/RequestActions';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import SendButton from '../components/SendButton';
import Settings from '../components/Settings';
import Signup from '../components/Signup';
import ThemeContextProvider from '../contexts/ThemeContextProvider';
import App from '../App';
import AuthContextProvider from '../contexts/AuthContextProvider';
import UserContextProvider from '../contexts/UserContextProvider';
import SocketContextProvider from '../contexts/SocketContextProvider';
import ChatsContextProvider from '../contexts/ChatsContextProvider';
import FilesContextProvider from '../contexts/FilesContextProvider';
import RequestsContextProvider from '../contexts/RequestsContextProvider';
import NotificationsContextProvider from '../contexts/NotificationsContextProvider';
import FORM_TYPES from '../constants/formTypes';
import ROUTES from  '../constants/routes';

let container = null;
let root;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('render an arrow button.', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <ArrowButton />
            </ThemeContextProvider>,
            container
        );
    });
    expect(container).toBeDefined();
});

it('render an attach button.', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <AttachButton />
            </ThemeContextProvider>,
            container
        );
    });
    expect(container).toBeDefined();
});

it('render a Sign UP Authentication Form', () => {
    act(() => {
        render(
            <Router>
                <AuthContextProvider>
                    <UserContextProvider>
                        <SocketContextProvider>
                            <ChatsContextProvider>
                                <RequestsContextProvider>
                                    <NotificationsContextProvider>
                                        <ThemeContextProvider>
                                            <Route path={ROUTES.signup} exact>
                                                <AuthForm
                                                    type={FORM_TYPES.signup}
                                                />
                                            </Route>
                                        </ThemeContextProvider>
                                    </NotificationsContextProvider>
                                </RequestsContextProvider>
                            </ChatsContextProvider>
                        </SocketContextProvider>
                    </UserContextProvider>
                </AuthContextProvider>
            </Router>,
            container
        );
    });
    expect(container).toBeDefined();
});

it('render a Sign IN Authentication Form', () => {
    act(() => {
        render(
            <Router>
                <AuthContextProvider>
                    <UserContextProvider>
                        <SocketContextProvider>
                            <ChatsContextProvider>
                                <RequestsContextProvider>
                                    <NotificationsContextProvider>
                                        <ThemeContextProvider>
                                            <Route path={ROUTES.login} exact>
                                                <AuthForm
                                                    type={FORM_TYPES.login}
                                                />
                                            </Route>
                                        </ThemeContextProvider>
                                    </NotificationsContextProvider>
                                </RequestsContextProvider>
                            </ChatsContextProvider>
                        </SocketContextProvider>
                    </UserContextProvider>
                </AuthContextProvider>
            </Router>,
            container
        );
    });
    expect(container).toBeDefined();
});
it('render an Authentication Message', () => {
    act(() => {
        render(
            <Router>
                <AuthContextProvider>
                    <UserContextProvider>
                        <SocketContextProvider>
                            <ChatsContextProvider>
                                <RequestsContextProvider>
                                    <NotificationsContextProvider>
                                        <ThemeContextProvider>
                                            <Route path={ROUTES.signup} exact>
                                                <AuthMessage />
                                            </Route>
                                        </ThemeContextProvider>
                                    </NotificationsContextProvider>
                                </RequestsContextProvider>
                            </ChatsContextProvider>
                        </SocketContextProvider>
                    </UserContextProvider>
                </AuthContextProvider>
            </Router>,
            container
        );
    });
    expect(container).toBeDefined();
});