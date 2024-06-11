import styled from 'styled-components';
import logo1 from '../../assets/images/logos/oc.jpg';
import logo2 from '../../assets/images/logos/sttrs.jpg';
import logo3 from '../../assets/images/logos/fetags.jpg';
import logo4 from '../../assets/images/logos/contag.jpg';
import logoApoio1 from '../../assets/images/logos/apoio-ics.jpg';
import logoApoio2 from '../../assets/images/logos/apoio-porticus.jpg';

const Titulo = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;

  & p{
    font-size: 18 px;
    color: #90401d;
    font-weight: 800;

    @media all and (max-width: 600px) {
      font-size: 16px;
    }
  }
`

const ImageWrapper1 = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.8fr 1fr 1.1fr;
  align-items:flex-end;
  gap: 2rem;
  max-width: 900px;

  @media all and (max-width: 600px) {
    gap: 1rem;
  }

  & img{
    width: 100%;
  }
`;

const ImageWrapper2 = styled(ImageWrapper1)`
  grid-template-columns: .5fr .6fr 1fr 1.1fr;

  @media all and (max-width: 600px) {
    grid-template-columns: .7fr .9fr 1fr 1.1fr;
  }

`;

const BlocoLogos = () => {
  return (
    <>
      <Titulo>
        <p>Realização</p>
        <ImageWrapper1>
          <div>
            <img src={logo1} />
          </div>
          <div>
            <img src={logo2} />
          </div>
          <div>
            <img src={logo3} />
          </div>
          <div>
            <img src={logo4} />
          </div>
        </ImageWrapper1>
      </Titulo>
      <Titulo>
        <p>Apoio</p>
        <ImageWrapper2>
          <div>
            <img src={logoApoio1} />
          </div>
          <div>
            <img src={logoApoio2} />
          </div>
        </ImageWrapper2>
      </Titulo>
    </>
  )
};

export default BlocoLogos;
