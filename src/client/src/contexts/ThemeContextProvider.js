import { ThemeProvider } from 'styled-components';
import mainTheme from '../styles/mainTheme';

const ThemeContextProvider = ({ children }) => {
    return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
};

export default ThemeContextProvider;
