import { Link } from 'react-router-dom';
import Navigation from '../Navigation/index';
import Container from '../Container/index';
import Heading from '../Heading/index';
import Button from '../Button/index';

const Protected = () => {
    return (
        <>
            <Navigation />
            <Container>
                <Heading>Log in or Sign up</Heading>
                <p>You must be logged in to use this feature.</p>
                <Link to="/login">
                    <Button>Log in</Button>
                </Link>
                <Link to="/signup">
                    <Button outline>Sign up</Button>
                </Link>
            </Container>
        </>
    );
};

export default Protected;
