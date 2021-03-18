import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
`;

export const Group = styled.div`
    margin-top: 30px;
    @media (min-width: ${SCREENS.medium}) {
        margin-left: ${({ spaced }) => (spaced ? '50px' : '0')};
    }
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    padding: 5px 0;
    width: 100%;
    transition: border 0.15s ease-in-out;
    border-bottom: 1px solid ${({ theme }) => theme.colors.subtle};
    color: ${({ theme }) => theme.colors.negative};
    &:focus {
        border-bottom: 1px solid ${({ theme }) => theme.colors.attention};
    }
    &[type='password'] {
        letter-spacing: 3px;
    }
`;

export const Split = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: ${SCREENS.medium}) {
        flex-direction: row;
        & > * {
            flex: 1;
        }
    }
`;

export const Buttons = styled.div`
    margin-top: 50px;
    & > *:first-child {
        margin-bottom: 15px;
    }
    @media (min-width: 355px) {
        & > *:first-child {
            margin-bottom: 0px;
            margin-right: 15px;
        }
    }
`;

export const Choice = styled.div`
    margin-top: 25px;
    font-size: ${({ theme }) => theme.typography.small};
    color: ${({ theme }) => theme.colors.universal};
    & > * {
        text-decoration: underline;
    }
`;
