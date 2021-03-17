import styled from 'styled-components';

export const Error = styled.div`
    margin-top: 25px;
    margin-right: ${({ spaced }) => (spaced ? '30px' : '0')};
    max-width: 750px;
    padding: 10px 20px;
    border: 1px solid #f5c6cb;
    border-radius: 7px;
    background-color: #f8d7da;
    color: #721c24;
`;
