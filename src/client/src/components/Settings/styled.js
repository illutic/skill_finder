import styled from 'styled-components';
import SCREENS from '../../constants/screens';
import Button from '../Button/index';

export const Section = styled.section`
    &:not(:first-child) {
        margin-top: 75px;
    }
    &:last-child {
        margin-bottom: 75px;
    }
`;

export const Subsection = styled.section`
    margin-top: 75px;
`;

export const Subheading = styled.h3`
    font-family: ${({ theme }) => theme.typography.secondary};
    font-size: ${({ theme }) => theme.typography.medium};
`;

export const Form = styled.form`
    margin-top: 35px;
    @media (min-width: ${SCREENS.medium}) {
        display: flex;
        align-items: flex-end;
        max-width: 750px;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: ${SCREENS.medium}) {
        flex: 1;
    }
`;

export const Label = styled.label``;

export const Input = styled.input`
    padding: 10px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.subtle};
`;

export const Submit = styled(Button)`
    margin-top: 25px;
    @media (min-width: ${SCREENS.medium}) {
        margin-top: 0;
        margin-left: 50px;
    }
`;

export const Skills = styled.div`
    display: flex;
    margin-top: 35px;
`;

export const Skill = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    padding: 10px 15px;
    border: 1px solid ${({ theme }) => theme.colors.subtle};
    border-radius: 7px;
`;

export const SkillName = styled.p`
    margin-right: 15px;
`;
