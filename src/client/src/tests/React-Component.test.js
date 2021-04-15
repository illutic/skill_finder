import './matchMedia.mock';
import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
import AuthContextProvider from '../contexts/AuthContextProvider';
import UserContextProvider from '../contexts/UserContextProvider';
import SocketContextProvider from '../contexts/SocketContextProvider';
import ChatsContextProvider from '../contexts/ChatsContextProvider';
import RequestsContextProvider from '../contexts/RequestsContextProvider';
import NotificationsContextProvider from '../contexts/NotificationsContextProvider';
import FORM_TYPES from '../constants/formTypes';
import ROUTES from '../constants/routes';
import FilesContextProvider from '../contexts/FilesContextProvider';
import NavigationContextProvider from '../contexts/NavigationContextProvider';
import LogoutModalContextProvider from '../contexts/LogoutModalContextProvider';

let container = null;
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

it('Render Arrow Button.', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <ArrowButton />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Attach Button.', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <AttachButton />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Sign Up Authentication Form', () => {
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
});

it('Render Sign In Authentication Form', () => {
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
});

it('Render Authentication Message', () => {
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
                                            <Route path={ROUTES.login} exact>
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
});

it('Render General Button.', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <Button />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Chat Component', () => {
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
                                            <Route path={ROUTES.chat} exact>
                                                <Chat />
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
});

it('Render Chat Message', () => {
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
                                            <Route path={ROUTES.messages} exact>
                                                <ChatsMessage />
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
});

it('Render Close Button.', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <CloseButton />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Contacts Drawer', () => {
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
                                            <Route path={ROUTES.messages} exact>
                                                <ContactsDrawer />
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
});

it('Render Stylized Container', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <Container />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Drawer', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <Drawer />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Files Drawer', () => {
    act(() => {
        render(
            <Router>
                <AuthContextProvider>
                    <UserContextProvider>
                        <SocketContextProvider>
                            <ChatsContextProvider>
                                <RequestsContextProvider>
                                    <NotificationsContextProvider>
                                        <FilesContextProvider>
                                            <ThemeContextProvider>
                                                <Route
                                                    path={ROUTES.messages}
                                                    exact
                                                >
                                                    <FilesDrawer />
                                                </Route>
                                            </ThemeContextProvider>
                                        </FilesContextProvider>
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
});

it('Render Form Error', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <FormError />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Form Success', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <FormSuccess />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Google Button', () => {
    act(() => {
        render(
            <Router>
                <AuthContextProvider>
                    <UserContextProvider>
                        <SocketContextProvider>
                            <ChatsContextProvider>
                                <RequestsContextProvider>
                                    <NotificationsContextProvider>
                                        <FilesContextProvider>
                                            <ThemeContextProvider>
                                                <Route
                                                    path={ROUTES.login}
                                                    exact
                                                >
                                                    <GoogleButton />
                                                </Route>
                                            </ThemeContextProvider>
                                        </FilesContextProvider>
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
});

it('Render Custom Heading', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <Heading />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Home', () => {
    act(() => {
        render(
            <Router>
                <AuthContextProvider>
                    <UserContextProvider>
                        <SocketContextProvider>
                            <ThemeContextProvider>
                                <Route path={ROUTES.home} exact>
                                    <Home />
                                </Route>
                            </ThemeContextProvider>
                        </SocketContextProvider>
                    </UserContextProvider>
                </AuthContextProvider>
            </Router>,
            container
        );
    });
});

it('Render Loading Screen', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <LoadingScreen />
            </ThemeContextProvider>,
            container
        );
    });
});

/** Not sure how to deal with that */
// it('Render Logout Modal', () => {
//     act(() => {
//         render(
//             <Router>
//                 <AuthContextProvider>
//                     <UserContextProvider>
//                         <SocketContextProvider>
//                             <ChatsContextProvider>
//                                 <RequestsContextProvider>
//                                     <NotificationsContextProvider>
//                                         <ThemeContextProvider>
//                                             <NavigationContextProvider>
//                                                 <LogoutModalContextProvider>
//                                                     <LogoutModal />
//                                                 </LogoutModalContextProvider>
//                                             </NavigationContextProvider>
//                                         </ThemeContextProvider>
//                                     </NotificationsContextProvider>
//                                 </RequestsContextProvider>
//                             </ChatsContextProvider>
//                         </SocketContextProvider>
//                     </UserContextProvider>
//                 </AuthContextProvider>
//             </Router>,
//             container
//         );
//     });
// });
// Target container is not a DOM element.

// 14 |     const logOut = useLogout();
// 15 |
// > 16 |     return ReactDOM.createPortal(
//    |                     ^
// 17 |         <Styled.Wrapper active={isLogoutModalActive} onClick={hideLogoutModal}>
// 18 |             <Styled.Window onClick={stopPropagation}>
// 19 |                 <Heading>Are you leaving?</Heading>

it('Render Messages', () => {
    act(() => {
        render(
            <Router>
                <AuthContextProvider>
                    <UserContextProvider>
                        <SocketContextProvider>
                            <ChatsContextProvider>
                                <RequestsContextProvider>
                                    <NotificationsContextProvider>
                                        <FilesContextProvider>
                                            <ThemeContextProvider>
                                                <Route
                                                    path={ROUTES.messages}
                                                    exact
                                                >
                                                    <Messages />
                                                </Route>
                                            </ThemeContextProvider>
                                        </FilesContextProvider>
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
});

it('Render Navigation', () => {
    act(() => {
        render(
            <Router>
                <React.StrictMode>
                    <AuthContextProvider>
                        <UserContextProvider>
                            <SocketContextProvider>
                                <ChatsContextProvider>
                                    <FilesContextProvider>
                                        <RequestsContextProvider>
                                            <NotificationsContextProvider>
                                                <ThemeContextProvider>
                                                    <NavigationContextProvider>
                                                        <LogoutModalContextProvider>
                                                            <Navigation />
                                                        </LogoutModalContextProvider>
                                                    </NavigationContextProvider>
                                                </ThemeContextProvider>
                                            </NotificationsContextProvider>
                                        </RequestsContextProvider>
                                    </FilesContextProvider>
                                </ChatsContextProvider>
                            </SocketContextProvider>
                        </UserContextProvider>
                    </AuthContextProvider>
                </React.StrictMode>
            </Router>,
            container
        );
    });
});

it('Render Navigation Button', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <NavigationButton />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Not Found Screen', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <NotFound />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Notification', () => {
    act(() => {
        render(
            <Router>
                <React.StrictMode>
                    <AuthContextProvider>
                        <UserContextProvider>
                            <SocketContextProvider>
                                <RequestsContextProvider>
                                    <NotificationsContextProvider>
                                        <ThemeContextProvider>
                                            <NavigationContextProvider>
                                                <LogoutModalContextProvider>
                                                    <Notification />
                                                </LogoutModalContextProvider>
                                            </NavigationContextProvider>
                                        </ThemeContextProvider>
                                    </NotificationsContextProvider>
                                </RequestsContextProvider>
                            </SocketContextProvider>
                        </UserContextProvider>
                    </AuthContextProvider>
                </React.StrictMode>
            </Router>,
            container
        );
    });
});

it('Render Notification Button', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <NotificationsButton />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Notification Panel', () => {
    act(() => {
        render(
            <Router>
                <React.StrictMode>
                    <AuthContextProvider>
                        <UserContextProvider>
                            <SocketContextProvider>
                                <RequestsContextProvider>
                                    <NotificationsContextProvider>
                                        <ThemeContextProvider>
                                            <NavigationContextProvider>
                                                <LogoutModalContextProvider>
                                                    <NotificationsPanel />
                                                </LogoutModalContextProvider>
                                            </NavigationContextProvider>
                                        </ThemeContextProvider>
                                    </NotificationsContextProvider>
                                </RequestsContextProvider>
                            </SocketContextProvider>
                        </UserContextProvider>
                    </AuthContextProvider>
                </React.StrictMode>
            </Router>,
            container
        );
    });
});

it('Render Profile', () => {
    act(() => {});
});

it('Render Profile Photo', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <ProfilePhoto />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Profile Thumbnail', () => {
    act(() => {});
});

it('Render Protected Route', () => {
    act(() => {});
});

it('Render Request Actions', () => {
    act(() => {});
});

it('Render Search Bar', () => {
    act(() => {});
});

it('Render Search Results', () => {
    act(() => {});
});

it('Render Send Button', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <SendButton />
            </ThemeContextProvider>,
            container
        );
    });
});

it('Render Settings', () => {
    act(() => {});
});
