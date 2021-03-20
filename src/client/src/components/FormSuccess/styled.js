import styled from 'styled-components';

export const Success = styled.div`
    margin-top: 25px;
    margin-right: ${({ spaced }) => (spaced ? '30px' : '0')};
    max-width: 750px;
    padding: 10px 20px;
    border: 1px solid #c3e6cb;
    border-radius: 7px;
    background-color: #d4edda;
    color: #155724;
`;
