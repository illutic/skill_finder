import styled from 'styled-components';

export const Button = styled.button`
    background: transparent;
    cursor: pointer;
`;

export const SVG = styled.svg`
    fill: ${({ theme }) => theme.colors.negative};
`;
