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
import podcastThumb0 from '../../assets/images/thumb-podcast-0.webp';
import podcastThumb1 from '../../assets/images/thumb-podcast-1.webp';
import podcastThumb2 from '../../assets/images/thumb-podcast-2.webp';
import podcastThumb3 from '../../assets/images/thumb-podcast-3.webp';
import podcastThumb4 from '../../assets/images/thumb-podcast-4.webp';
import podcastThumb5 from '../../assets/images/thumb-podcast-5.webp';

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


  const descriptionEp0 = 'As mudanças climáticas já não são uma previsão distante – elas estão acontecendo agora e afetando diretamente quem trabalha no campo, na floresta e nas águas. Secas prolongadas, chuvas intensas e fora de época, mudanças na estação de plantio e colheita... Tudo isso altera a rotina e a produtividade de quem cultiva a terra com tanto esforço e dedicação.';
  const descriptionEp1 = 'As mudanças climáticas já estão acontecendo e afetando diretamente quem trabalha no campo, na floresta e nas águas. Secas prolongadas, chuvas intensas e fora de época, mudanças na estação de plantio e colheita... Tudo isso altera a rotina e a produtividade de quem cultiva a terra com tanto esforço e dedicação.';
  const descriptionEp2 = 'As mudanças climáticas já estão acontecendo e afetando diretamente quem trabalha no campo, na floresta e nas águas. Secas prolongadas, chuvas intensas e fora de época, mudanças na estação de plantio e colheita... Tudo isso altera a rotina e a produtividade de quem cultiva a terra com tanto esforço e dedicação.';
  const descriptionEp3 = 'As mudanças climáticas já estão acontecendo e afetando diretamente quem trabalha no campo, na floresta e nas águas. Secas prolongadas, chuvas intensas e fora de época, mudanças na estação de plantio e colheita... No episódio de hoje, trazemos depoimentos de companheiros e companheiras da região Centro-Oeste.';
  const descriptionEp4 = 'As mudanças climáticas já estão acontecendo e afetando diretamente quem trabalha no campo, na floresta e nas águas. Secas prolongadas, chuvas intensas e fora de época, mudanças na estação de plantio e colheita... No episódio de hoje, trazemos depoimentos de companheiros e companheiras da região Sul.';
  const descriptionEp5 = 'As mudanças climáticas já estão acontecendo e afetando diretamente quem trabalha no campo, na floresta e nas águas. Secas prolongadas, chuvas intensas e fora de época, mudanças na estação de plantio e colheita... No episódio de hoje, trazemos depoimentos de companheiros e companheiras da região Sul.';

  const episodes = [
    {
      thumb: podcastThumb0,
      title: "EP 0 - TEASER",
      description: descriptionEp0,
      alt: "mulher do campo olhando para o céu",
      link: "https://open.spotify.com/episode/5xutRGRdW8KzygrkEYcrEe"
    },
    {
      thumb: podcastThumb1,
      title: "EP 1 - SERÁ QUE VAI CHOVER? NO NORDESTE",
      description: descriptionEp1,
      alt: "pessoa do campo plantando na terra",
      link: "https://open.spotify.com/episode/59cEX0gn6OMVXePzOVLqPz"
    },
    {
      thumb: podcastThumb2,
      title: "EP 2 - SERÁ QUE VAI CHOVER? NO SUDESTE",
      description: descriptionEp2,
      alt: "pessoas almoçando ao ar livre no campo",
      link: "https://open.spotify.com/episode/4k1iX7epFMZL6owlHLC47h"
    },
    {
      thumb: podcastThumb3,
      title: "EP 3 - SERÁ QUE VAI CHOVER? NO CENTRO-OESTE",
      description: descriptionEp3,
      alt: "homem do campo com paisagem atrás",
      link: "https://open.spotify.com/episode/4pYfvZiTIO9CjeOAWWJMGd"
    },
    {
      thumb: podcastThumb4,
      title: "EP 4 - SERÁ QUE VAI CHOVER? NO SUL",
      description: descriptionEp4,
      alt: "cavalo e arado",
      link: "https://open.spotify.com/episode/489wxJBWJKWo6jkAqCuVzj"
    },
    {
      thumb: podcastThumb5,
      title: "EP 5 - SERÁ QUE VAI CHOVER? NO NORTE",
      description: descriptionEp5,
      alt: "imagens de colheita",
      link: "https://open.spotify.com/episode/3xLin4GaGswfviarNcOkuC"
    },
    // adicionar mais episódios aqui
  ];

  var settings = {
    infinite: episodes.length > 1,
    arrows: episodes.length > 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
                <a href={episode.link} target='_blank'>
                  <img src={episode.thumb} alt={episode.alt} />
                </a>
                <InfoWrapper>
                  <PodcastTitle href={episode.link} target='_blank'>{episode.title}</PodcastTitle>
                  <Description>
                    {episode.description}
                  </Description>
                  <IconWrapper>
                    <a className='link' href={episode.link} target='_blank'>
                      <img src={spotify} alt='icone spotify' />
                    </a>
                    {/* <a className='link' href={episode.link} target='_blank'> */}
                    {/* <img src={download} alt='icone download' /> */}
                    {/* </a> */}
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
