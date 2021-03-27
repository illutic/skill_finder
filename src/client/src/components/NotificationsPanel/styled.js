import styled from 'styled-components';

export const Notifications = styled.div`
    position: absolute;
    z-index: 100;
    top: 50px;
    right: 0;
    padding: 5px 20px;
    width: 375px;
    max-width: 100%;
    max-height: 275px;
    overflow-y: scroll;
    border: 1px solid ${({ theme }) => theme.colors.subtle};
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.positive};
    opacity: ${({ active }) => (active ? 1 : 0)};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    transition: opacity 0.25s ease-in-out;
`;

export const Message = styled.div`
    padding: 15px;
`;
