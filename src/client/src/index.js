import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './contexts/AuthContextProvider';
import UserContextProvider from './contexts/UserContextProvider';
import ChatsContextProvider from './contexts/ChatsContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <UserContextProvider>
                <ChatsContextProvider>
                    <ThemeContextProvider>
                        <App />
                    </ThemeContextProvider>
                </ChatsContextProvider>
            </UserContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
