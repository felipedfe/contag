import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Container,
  PodcastCard,
  PodcastTitle,
  Description,
  InfoWrapper,
  TitleWrapper,
} from "./styled";
import { AiOutlineSpotify as Spotify } from 'react-icons/ai';
import { RiDownloadLine as Download } from 'react-icons/ri';
import leftArrow from '../../assets/images/left.svg';
import rightArrow from '../../assets/images/right.svg';
import podcastThumb1 from '../../assets/images/thumb-podcast-1.jpg';

const Podcast = () => {

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
      <TitleWrapper>
        <h2 className='title'>PODCAST</h2>
      </TitleWrapper>
      <Slider {...settings}>

        {/* Episódio 1 */}
        <div>
          <PodcastCard>
            <img src={podcastThumb1} alt='homem do campo olhando para o horizonte' />
            <InfoWrapper>
              <PodcastTitle>EP 0 - Teaser</PodcastTitle>
              <Description>
                Como vocês sabem, nós que trabalhamos com a terra,
                estamos vendo o clima mudar bem diante dos nossos olhos.
                O calor tá mais forte e por mais tempo, as chuvas às vezes
                somem quando mais precisamos, ou então caem de uma vez,
                alagando tudo. Isso tudo mexe com o nosso jeito de plantar e
                colher. E não é só a gente que tá notando isso, né?
              </Description>
              <div>
                <Spotify size={40} color='#8f401c' style={{ backgroundColor: '#ffd200', borderRadius: '50px' }} />
                <Download size={40} color='#8f401c' style={{ backgroundColor: '#ffd200', borderRadius: '50px', padding: '5px', }} />
              </div>
            </InfoWrapper>
          </PodcastCard>
        </div>

        {/* Episódio 2 */}
        <div>
          <PodcastCard>
            <img src={podcastThumb1} alt='outra descripcao' />
            <InfoWrapper>
              <PodcastTitle>EP 0 - Teaser</PodcastTitle>
              <Description>
                Uma descricao
              </Description>
              <div>
                <Spotify size={40} color='#8f401c' style={{ backgroundColor: '#ffd200', borderRadius: '50px' }} />
                <Download size={40} color='#8f401c' style={{ backgroundColor: '#ffd200', borderRadius: '50px', padding: '5px', }} />
              </div>
            </InfoWrapper>
          </PodcastCard>
        </div>
      </Slider>
    </Container>
  )
};

export default Podcast;
