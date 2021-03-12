import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background: transparent;
`;

export const SVG = styled.svg`
    fill: ${({ theme, active }) =>
        active ? theme.colors.attention : theme.colors.negative};
`;
