import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Paragraph = styled.p`
    margin: 20px 0;
    text-align: center;
`;

export const Buttons = styled.div`
    & > *:first-child {
        margin-right: 15px;
    }
`;
