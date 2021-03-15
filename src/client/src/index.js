import React from 'react';
import ReactDOM from 'react-dom';
import AuthContextProvider from './contexts/AuthContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
