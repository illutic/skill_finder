import * as Styled from './styled';

const FormSuccess = ({ children, ...rest }) => {
    return <Styled.Success {...rest}>{children}</Styled.Success>;
};

export default FormSuccess;
