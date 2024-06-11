import styled from "styled-components";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from '../../assets/images/left.svg';
import rightArrow from '../../assets/images/right.svg';

import imagem1 from '../../assets/images/carrossel-bloco-1/carrossel-01.png';
import imagem2 from '../../assets/images/carrossel-bloco-1/carrossel-02.png';

const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* & .slick-slider, .slick-list, .slick-track {
    height: 100%;
  }

  & .slick-track * {
    height: 100%;
    width: 100%;
  } */
`

const ImageWrapper = styled.div`

  & img {
    width: 100%;
  }
`;

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img src={leftArrow} className={className} style={{ ...style, display: "block" }} onClick={onClick} alt="Prev" />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img src={rightArrow} className={className} style={{ ...style, display: "block" }} onClick={onClick} alt="Next" />
  );
};

const CarrosselBloco1 = () => {
  // Configuração do carrossel
  var settings = {
    // dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <Container>
      <Slider {...settings}>
        <ImageWrapper>
          <img src={imagem1} />
        </ImageWrapper>
        <ImageWrapper>
          <img src={imagem2} />
        </ImageWrapper>
      </Slider>
    </Container>
  )
};

export default CarrosselBloco1;
