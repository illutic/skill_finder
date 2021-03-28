import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './contexts/AuthContextProvider';
import UserContextProvider from './contexts/UserContextProvider';
import SocketContextProvider from './contexts/SocketContextProvider';
import ChatsContextProvider from './contexts/ChatsContextProvider';
import FilesContextProvider from './contexts/FilesContextProvider';
import RequestsContextProvider from './contexts/RequestsContextProvider';
import NotificationsContextProvider from './contexts/NotificationsContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <UserContextProvider>
                <SocketContextProvider>
                    <ChatsContextProvider>
                        <FilesContextProvider>
                            <RequestsContextProvider>
                                <NotificationsContextProvider>
                                    <ThemeContextProvider>
                                        <App />
                                    </ThemeContextProvider>
                                </NotificationsContextProvider>
                            </RequestsContextProvider>
                        </FilesContextProvider>
                    </ChatsContextProvider>
                </SocketContextProvider>
            </UserContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
