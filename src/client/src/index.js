import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './contexts/AuthContextProvider';
import UserContextProvider from './contexts/UserContextProvider';
import SocketContextProvider from './contexts/SocketContextProvider';
import ChatsContextProvider from './contexts/ChatsContextProvider';
import RequestsContextProvider from './contexts/RequestsContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <UserContextProvider>
                <SocketContextProvider>
                    <ChatsContextProvider>
                        <RequestsContextProvider>
                            <ThemeContextProvider>
                                <App />
                            </ThemeContextProvider>
                        </RequestsContextProvider>
                    </ChatsContextProvider>
                </SocketContextProvider>
            </UserContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
