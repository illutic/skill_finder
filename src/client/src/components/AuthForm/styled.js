import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 500px;
`;

export const Label = styled.label``;

export const Input = styled.input``;

export const Buttons = styled.div`
    & > *:first-child {
        margin-right: 15px;
    }
`;

export const Error = styled.div``;
