import * as Styled from './styled';

const Subheading = ({ children, ...rest }) => {
    return <Styled.Subheading {...rest}>{children}</Styled.Subheading>;
};

export default Subheading;
