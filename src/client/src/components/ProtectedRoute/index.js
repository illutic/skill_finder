import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import ROUTES from '../../constants/routes';

const ProtectedRoute = ({ children, ...rest }) => {
    const { isAuth } = useContext(AuthContext);

    if (isAuth === false && isAuth !== null) {
        return <Redirect to={ROUTES.protected} />;
    }

    return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
