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
  PodCastWrapper,
  IconWrapper,
} from "./styled";
import { AiOutlineSpotify as Spotify } from 'react-icons/ai';
import { RiDownloadLine as Download } from 'react-icons/ri';
import leftArrow from '../../assets/images/left.svg';
import rightArrow from '../../assets/images/right.svg';
import spotify from '../../assets/images/icone-spotify.svg'
import download from '../../assets/images/icone-download.svg'
import podcastThumb1 from '../../assets/images/thumb-podcast-1.webp';

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
  // var settings = {
  //   // dots: true,
  //   infinite: true,
  //   arrows: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   prevArrow: <CustomPrevArrow />,
  //   nextArrow: <CustomNextArrow />
  // };

  const episodes = [
    {
      thumb: podcastThumb1,
      title: "EP 0 - Teaser",
      description: "Em breve",
      alt: "homem do campo olhando para o horizonte",
    },
    // Você pode adicionar mais episódios aqui
  ];

  var settings = {
    infinite: episodes.length > 1,
    arrows: episodes.length > 1,
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
        <p>
          Será que vai chover?
          Essa é a pergunta que nós da
          Agricultura Familiar
          sempre nos fazemos para
          plantar e para colher.
        </p>
        <p className='slogan'>
          Escute a nossa voz
        </p>
      </TitleWrapper>
      {episodes.length > 0 ? (
        <Slider {...settings}>
          {episodes.map((episode, index) => (
            <PodCastWrapper key={index}>
              <PodcastCard>
                <img src={episode.thumb} alt={episode.alt} />
                <InfoWrapper>
                  <PodcastTitle>{episode.title}</PodcastTitle>
                  <Description>
                    {episode.description}
                  </Description>
                  <IconWrapper>
                    <img src={spotify} alt='icone spotify' />
                    <img src={download} alt='icone download' />
                  </IconWrapper>
                </InfoWrapper>
              </PodcastCard>
            </PodCastWrapper>
          ))}
        </Slider>
      ) : (
        <PodCastWrapper>
          <PodcastCard>
            <img src={episodes[0].thumb} alt={episodes[0].alt} />
            <InfoWrapper>
              <PodcastTitle>{episodes[0].title}</PodcastTitle>
              <Description>
                {episodes[0].description}
              </Description>
              <IconWrapper>
                {/* <Spotify size={40} color='#8f401c' style={{ backgroundColor: '#ffd200', borderRadius: '50px' }} /> */}
                {/* <Download size={40} color='#8f401c' style={{ backgroundColor: '#ffd200', borderRadius: '50px', padding: '5px', }} /> */}
                <img src={spotify} alt='icone spotify' />
                <img src={download} alt='icone download' />
              </IconWrapper>
            </InfoWrapper>
          </PodcastCard>
        </PodCastWrapper>
      )}
    </Container>
  )
};

export default Podcast;
