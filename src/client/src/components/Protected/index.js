import { Link } from 'react-router-dom';
import Container from '../Container/index';

const Protected = () => {
    return (
        <Container>
            <h1>Log in or Sign up</h1>
            <p>You must be logged in to use this feature.</p>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
        </Container>
    );
};

export default Protected;
