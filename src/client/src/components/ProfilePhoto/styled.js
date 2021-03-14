import styled from 'styled-components';

export const Frame = styled.div`
    width: ${({ size }) => (size ? size : '35')}px;
    height: ${({ size }) => (size ? size : '35')}px;
    background-color: ${({ theme }) => theme.colors.subtle};
    border-radius: 300px;
    overflow: hidden;
`;

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`;
