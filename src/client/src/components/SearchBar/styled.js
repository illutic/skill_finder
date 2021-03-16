import styled from 'styled-components';

export const Form = styled.form``;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    & > * {
        flex: 1;
    }
`;

export const Input = styled.input`
    padding: 5px 20px 5px 45px;
    border: 1px solid ${({ theme }) => theme.colors.subtle};
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    background: transparent;
    font-size: ${({ theme }) => theme.typography.small};
    color: ${({ theme }) => theme.colors.universal};
`;

export const Button = styled.button`
    padding: 5px 20px;
    max-width: 90px;
    transform: translateX(-1px);
    border: 1px solid ${({ theme }) => theme.colors.attention};
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    background-color: ${({ theme }) => theme.colors.attention};
    font-size: ${({ theme }) => theme.typography.small};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.positive};
    cursor: pointer;
`;

export const Icon = styled.div`
    position: absolute;
    top: 50%;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-50%);
    & > svg {
        fill: ${({ theme }) => theme.colors.universal};
    }
`;
