import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    @media (min-width: ${SCREENS.small}) {
        align-items: flex-start;
    }
`;

export const FullName = styled.p`
    margin-top: 10px;
    font-size: ${({ theme }) => theme.typography.medium};
    font-family: ${({ theme }) => theme.typography.secondary};
`;
