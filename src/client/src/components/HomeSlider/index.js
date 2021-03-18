import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import * as Styled from './styled';
import SCREENS from '../../constants/screens';
import mathematicsSource from '../../assets/mathematics.jpg';
import computerScienceSource from '../../assets/computer-science.jpg';
import physicsSource from '../../assets/physics.jpg';
import programmingSource from '../../assets/programming.jpg';
import geographySource from '../../assets/geography.jpg';
import chemistrySource from '../../assets/chemistry.jpg';

const sliderSettings = {
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    autoplay: true,
    infinite: true,
    dots: true,
};

const HomeSlider = () => {
    const [slidesToShow, setSlidesToShow] = useState(1);

    const adjustSliderSettings = () => {
        const largeMedia = window.matchMedia(`(min-width: ${SCREENS.large})`);
        if (largeMedia.matches) {
            setSlidesToShow(3);
            return;
        }
        const mediumMedia = window.matchMedia(`(min-width: ${SCREENS.medium})`);
        if (mediumMedia.matches) {
            setSlidesToShow(2);
            return;
        }
        setSlidesToShow(1);
    };

    useEffect(() => {
        adjustSliderSettings();
        window.addEventListener('resize', adjustSliderSettings);
        return () => {
            window.removeEventListener('resize', adjustSliderSettings);
        };
    }, []);

    return (
        <Styled.SliderContainer>
            <Slider {...sliderSettings} slidesToShow={slidesToShow}>
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
                        <Styled.Image src={physicsSource} />
                        <Styled.Content>Physics</Styled.Content>
                    </Styled.Slide>
                </Link>
                <Link to="/search?query=Geography">
                    <Styled.Slide>
                        <Styled.Image src={geographySource} />
                        <Styled.Content>Geography</Styled.Content>
                    </Styled.Slide>
                </Link>
                <Link to="/search?query=Programming">
                    <Styled.Slide>
                        <Styled.Image src={programmingSource} />
                        <Styled.Content>Programming</Styled.Content>
                    </Styled.Slide>
                </Link>
                <Link to="/search?query=Chemistry">
                    <Styled.Slide>
                        <Styled.Image src={chemistrySource} />
                        <Styled.Content>Chemistry</Styled.Content>
                    </Styled.Slide>
                </Link>
            </Slider>
        </Styled.SliderContainer>
    );
};

export default HomeSlider;
