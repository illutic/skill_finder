import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './contexts/AuthContextProvider';
import UserContextProvider from './contexts/UserContextProvider';
import SocketContextProvider from './contexts/SocketContextProvider';
import ChatsContextProvider from './contexts/ChatsContextProvider';
import RequestsContextProvider from './contexts/RequestsContextProvider';
import NotificationsContextProvider from './contexts/NotificationsContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <UserContextProvider>
                <SocketContextProvider>
                    <ChatsContextProvider>
                        <RequestsContextProvider>
                            <NotificationsContextProvider>
                                <ThemeContextProvider>
                                    <App />
                                </ThemeContextProvider>
                            </NotificationsContextProvider>
                        </RequestsContextProvider>
                    </ChatsContextProvider>
                </SocketContextProvider>
            </UserContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
