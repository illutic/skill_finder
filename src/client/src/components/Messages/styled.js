import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Drawer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    max-width: 90%;
    height: 100%;
    overflow-y: scroll;
    transform: ${({ active }) =>
        active ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.25s ease-in-out;
    background: ${({ theme }) => theme.colors.positive};
    border-right: 1px solid ${({ theme }) => theme.colors.subtle};
`;

export const ContactsDrawer = styled(Drawer)`
    left: 0;
    padding: 25px 0px 25px 25px;
    // transform: translateX(-100%);
`;

export const Contact = styled.div`
    position: relative;
    margin-top: 25px;
    padding-right: 50px;
    &.active::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 3px;
        height: 100%;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: ${({ theme }) => theme.colors.attention};
    }
`;

export const FilesDrawer = styled(Drawer)`
    width: 260px;
`;

export const Shared = styled.p`
    padding: 25px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.subtle};
`;

export const Files = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 25px;
`;

export const File = styled.li`
    display: inline-block;
    text-decoration: underline;
    cursor: pointer;
    &:not(:first-child) {
        margin-top: 15px;
    }
`;
