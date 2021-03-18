import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './contexts/AuthContextProvider';
import ChatsContextProvider from './contexts/ChatsContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <ChatsContextProvider>
                <ThemeContextProvider>
                    <App />
                </ThemeContextProvider>
            </ChatsContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
