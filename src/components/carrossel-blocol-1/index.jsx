import styled from "styled-components";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from '../../assets/images/left.svg';
import rightArrow from '../../assets/images/right.svg';

import imagem1 from '../../assets/images/carrossel-bloco-1/carrossel-01.png';
import imagem2 from '../../assets/images/carrossel-bloco-1/carrossel-02.png';
import imagem3 from '../../assets/images/carrossel-bloco-1/carrossel_03.png';
import imagem4 from '../../assets/images/carrossel-bloco-1/carrossel_04.png';
import imagem5 from '../../assets/images/carrossel-bloco-1/carrossel_05.png';
import imagem6 from '../../assets/images/carrossel-bloco-1/carrossel_06.png';
import imagem7 from '../../assets/images/carrossel-bloco-1/carrossel_07.png';
import imagem8 from '../../assets/images/carrossel-bloco-1/carrossel_08.png';
import imagem9 from '../../assets/images/carrossel-bloco-1/carrossel_09.png';
import imagem10 from '../../assets/images/carrossel-bloco-1/carrossel_10.png';

const images = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10];

const Container = styled.section`
  width: 100%;
  height: 100%;
  /* background-color: #689261; */
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

    @media all and (max-width: 1024px) {
    padding: 0 10%;
  }

  @media all and (max-width: 600px) {
    padding: 0 5%;
  }
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
    autoplay: true,
    autoplaySpeed: 3000,
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
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </ImageWrapper>
        ))}
      </Slider>
    </Container>
  )
};

export default CarrosselBloco1;
