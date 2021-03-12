import { useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import Protected from '../Protected/index';

const ProtectedRoute = ({ children, ...rest }) => {
    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
        return <Protected />;
    }

    return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
