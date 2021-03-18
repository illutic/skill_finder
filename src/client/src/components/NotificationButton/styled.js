import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transform: scale(0.9);
    background: transparent;
    cursor: pointer;

    & > svg {
        fill: ${({ theme, active }) =>
            active ? theme.colors.attention : theme.colors.negative};
    }
`;
