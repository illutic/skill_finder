import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import * as Styled from './styled';
import mathematicsSource from '../../assets/mathematics.jpg';
import computerScienceSource from '../../assets/computer-science.jpg';
import physicsPhoto from '../../assets/physics.jpg';
import programmingPhoto from '../../assets/programming.jpg';
import geographyPhoto from '../../assets/geography.jpg';
import chemistryPhoto from '../../assets/chemistry.jpg';

const sliderSettings = {
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    autoplay: true,
    infinite: true,
    dots: true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const HomeSlider = () => {
    return (
        <Styled.SliderContainer>
            <Slider {...sliderSettings}>
                <Link to="/search?query=Mathematics">
                    <Styled.Slide>
                        <Styled.Image src={mathematicsSource} />
                        <Styled.Content>Mathematics</Styled.Content>
                    </Styled.Slide>
                </Link>
                <Link to="/search?query=Computer+Science">
                    <Styled.Slide>
                        <Styled.Image src={computerScienceSource} />
                        <Styled.Content>Computer Science</Styled.Content>
                    </Styled.Slide>
                </Link>
                <Link to="/search?query=Physics">
                    <Styled.Slide>
                        <Styled.Image src={physicsPhoto} />
                        <Styled.Content>Physics</Styled.Content>
                    </Styled.Slide>
                </Link>
                <Link to="/search?query=Geography">
                    <Styled.Slide>
                        <Styled.Image src={geographyPhoto} />
                        <Styled.Content>Geography</Styled.Content>
                    </Styled.Slide>
                </Link>
                <Link to="/search?query=Programming">
                    <Styled.Slide>
                        <Styled.Image src={programmingPhoto} />
                        <Styled.Content>Programming</Styled.Content>
                    </Styled.Slide>
                </Link>
                <Link to="/search?query=Chemistry">
                    <Styled.Slide>
                        <Styled.Image src={chemistryPhoto} />
                        <Styled.Content>Chemistry</Styled.Content>
                    </Styled.Slide>
                </Link>
            </Slider>
        </Styled.SliderContainer>
    );
};

export default HomeSlider;
