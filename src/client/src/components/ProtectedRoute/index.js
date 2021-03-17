import { useContext } from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import AuthMessage from '../AuthMessage/index';

const ProtectedRoute = ({ children, ...rest }) => {
    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
        return <AuthMessage />;
    }

    return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
