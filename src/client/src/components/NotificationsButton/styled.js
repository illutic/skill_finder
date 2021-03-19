import styled from 'styled-components';
import SCREENS from '../../constants/screens';

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
    @media (min-width: ${SCREENS.large}) {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`;
