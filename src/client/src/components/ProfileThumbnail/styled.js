import styled from 'styled-components';
import SCREENS from '../../constants/screens';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Details = styled.div`
    margin-left: 15px;
    flex: 1;
`;

export const Paragraph = styled.p`
    max-width: ${({ limited }) => (limited ? '100px' : 'none')};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const Name = styled(Paragraph)`
    line-height: 1.25;
`;

export const Title = styled(Paragraph)`
    font-size: ${({ theme }) => theme.typography.small};
`;
