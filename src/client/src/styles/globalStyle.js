import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body {
        font-family: ${({ theme }) => theme.typography.primary};
        font-size: ${({ theme }) => theme.typography.default};
        color: ${({ theme }) => theme.colors.negative};
    }
`;

export default GlobalStyle;
