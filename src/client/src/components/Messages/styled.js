import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const SidebarContainer = styled.div`
    z-index: 1px;   
    width: 250px;
    height: 100vh;
    d-flex flex-column;
    justify-content-center;
    overflow-auto;
    flex-grow-1;
`;

export const List = styled.ul`
    position: absolute;
    top: 28%;
    z-index: 1;
    width: 25%;
    background-color: ${({ theme }) => theme.colors.positive};
    transition: transform 0.25s ease-in-out;
    @media (min-width: ${SCREENS.large}) {
        display: flex;
        justify-content-center;
        z-index: 1;
        max-width: 250px;
        transform: translateY(-100%);
        transition: none;
        background: transparent;
        box-shadow: none;

    }
`;

export const Item = styled.li`
    padding-top: 20px;
    text-align: center;
    @media (min-width: ${SCREENS.large}) {
        padding-top: 0;
        &:not(:last-child) {
            margin-right: 50px;
            z-index: 1px;
            padding-top: 30px;
            border-top: 2px solid transparent;
            border-right: 2px solid transparent;
        }
    }
`;
