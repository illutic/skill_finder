import styled from 'styled-components';

export const SliderContainer = styled.div`
    margin-top: 75px;

    .slick-slide {
        box-sizing: border-box;
        padding-right: 25px;
    }

    ul.slick-dots {
        transform: translateY(25px);
    }
`;

export const Slide = styled.div`
    position: relative;
    border-radius: 15px;
    height: 225px;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: ${({ theme }) => theme.typography.medium};
    color: ${({ theme }) => theme.colors.positive};
    opacity: 0;
    transition: opacity 0.25s ease-in-out;

    &:hover {
        opacity: 1;
    }
`;
