import styled from 'styled-components';

export const Frame = styled.div`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 100px;
    overflow: hidden;
`;

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`;
