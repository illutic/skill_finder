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
        outline: 0;
        font: inherit;
    }

    body {
        overflow-y: scroll;
        line-height: 1.75;
        font-family: ${({ theme }) => theme.typography.primary};
        font-size: ${({ theme }) => theme.typography.default};
        color: ${({ theme }) => theme.colors.negative};
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
`;

export default GlobalStyle;
