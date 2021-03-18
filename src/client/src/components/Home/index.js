import Container from '../Container/index';
import * as Styled from './styled';
import Heading from '../Heading/index';
import HomeSlider from '../HomeSlider';

const Home = () => {
    return (
        <Container>
            <Styled.Section>
                <Heading underlined>Featured skills</Heading>
                <HomeSlider />
            </Styled.Section>
        </Container>
    );
};

export default Home;
