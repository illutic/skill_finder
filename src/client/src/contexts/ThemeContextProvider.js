import { ThemeProvider } from 'styled-components';
import baseTheme from '../styles/baseTheme';

const ThemeContextProvider = ({ children }) => {
    return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
};

export default ThemeContextProvider;
