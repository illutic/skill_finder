import styled from 'styled-components';

export const Heading = styled.h2`
    position: relative;
    display: inline-block;
    font-family: ${({ theme }) => theme.typography.secondary};
    font-size: ${({ theme, extra }) =>
        extra ? theme.typography.extraLarge : theme.typography.large};
    font-weight: 700;
    z-index: 1;
    word-break: break-word;
    &::after {
        content: '';
        display: ${({ underlined }) => (underlined ? 'block' : 'none')};
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: -1;
        width: 75%;
        height: 10px;
        opacity: 0.4;
        background: ${({ theme }) => theme.colors.attention};
    }
`;
