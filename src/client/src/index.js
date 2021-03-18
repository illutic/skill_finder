import React from 'react';
import ReactDOM from 'react-dom';
import AuthContextProvider from './contexts/AuthContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import App from './App';
import ChatContextProvider from './contexts/ChatContextProvider';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <ThemeContextProvider>
                <ChatContextProvider>
                    <App />
                </ChatContextProvider>
            </ThemeContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
