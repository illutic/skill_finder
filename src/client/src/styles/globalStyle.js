import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
        line-height: 1.5;
        color: ${({ theme }) => theme.colors.negative};
    }
`;

export default GlobalStyle;
