import { Link } from 'react-router-dom';
import Container from '../Container/index';
import Heading from '../Heading/index';

const Protected = () => {
    return (
        <Container>
            <Heading>Log in or Sign up</Heading>
            <p>You must be logged in to use this feature.</p>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
        </Container>
    );
};

export default Protected;
