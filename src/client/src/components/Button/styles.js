import styled from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    padding: 10px 15px;
    border: ${({ theme, outline }) =>
        outline ? `1px solid ${theme.colors.attention}` : 'none'};
    border-radius: 7px;
    background-color: ${({ theme, outline }) =>
        outline ? 'transparent' : theme.colors.attention};
    font-weight: 300;
    color: ${({ theme, outline }) =>
        outline ? theme.colors.attention : theme.colors.positive};
    &:hover {
        cursor: pointer;
    }
`;
