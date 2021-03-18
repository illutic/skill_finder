import * as Styled from './styled';

const FormError = ({ children, ...rest }) => {
    return <Styled.Error {...rest}>{children}</Styled.Error>;
};

export default FormError;
