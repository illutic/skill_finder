import { Route, Link } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
    const isAuth = false;

    if (!isAuth) {
        return (
            <>
                <h1>Log in or Sign up</h1>
                <p>You must be logged in to use this feature.</p>
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
            </>
        );
    }

    return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
