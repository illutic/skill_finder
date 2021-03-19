import * as Styled from './styled';

const Container = ({ children, ...rest }) => {
    return <Styled.Container {...rest}>{children}</Styled.Container>;
};

export default Container;
