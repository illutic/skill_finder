import * as Styled from './styled';

const Heading = ({ children, ...rest }) => {
    return <Styled.Heading {...rest}>{children}</Styled.Heading>;
};

export default Heading;
