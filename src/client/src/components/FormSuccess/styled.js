import styled from 'styled-components';

export const Success = styled.div`
    display: inline-block;
    margin-top: 25px;
    margin-right: ${({ spaced }) => (spaced ? '30px' : '0')};
    padding: 10px 20px;
    max-width: 750px;
    border: 1px solid #c3e6cb;
    border-radius: 7px;
    background-color: #d4edda;
    color: #155724;
`;
