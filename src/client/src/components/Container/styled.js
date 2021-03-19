import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1180px;
    margin: ${({ spaced }) => (spaced ? '75px auto' : '0 auto')};
    padding: 0 25px;
    @media (min-width: 750px) {
        padding: 0 50px;
    }
`;
