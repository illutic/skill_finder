import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './contexts/AuthContextProvider';
import UserContextProvider from './contexts/UserContextProvider';
import ChatsContextProvider from './contexts/ChatsContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import SocketContextProvider from './contexts/SocketContextProvider';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <SocketContextProvider>
                <UserContextProvider>
                    <ChatsContextProvider>
                        <ThemeContextProvider>
                            <App />
                        </ThemeContextProvider>
                    </ChatsContextProvider>
                </UserContextProvider>
            </SocketContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
