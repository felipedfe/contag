import styled from 'styled-components';
import logoOc from '../../assets/images/logo-oc.png';
import logoContag from '../../assets/images/logo-contag.png';
import frutas from '../../assets/images/frutas.png';
import CarrosselBloco1 from '../carrossel-blocol-1';

const Container = styled.section`
  display: grid;
  grid-template-columns: 59% 38%;
  width: 100%;
  gap: 2rem;

  @media all and (max-width: 1060px) {
    grid-template-columns: 48% 48%;
  }

  @media all and (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;

const AgriculturaFamiliar = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding: 10% 4rem 2rem 4rem;

  & h2 {
    background-color: #73c4c5;
    font-size: 22px;
    max-width: 90%;

    @media all and (max-width: 600px) {
    text-align: center;
    max-width: 100%;
  }
  }

  p {
    color: #fff;
    font-size: 20px;
  }

  @media all and (max-width: 600px) {
    padding: 1rem 1rem 0 1rem;
  }
`;

const InfoText = styled.p`
  padding-bottom: 10px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #90401d;
  clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
  z-index: -1;

  @media all and (max-width: 1024px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  gap: 2rem;
`;

const LogoWrapper = styled.div`
  & img {
    width: 100%;
  }
`;

const FrutasWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: -20px;
  right: -10px;

  & img {
    width: 230px;
  }

  @media all and (max-width: 1200px) {
    & img {
      width: 180px;
    }
  }

  @media all and (max-width: 1060px) {
    & img {
      width: 150px;
    }
  }

  @media all and (max-width: 600px) {
    position: relative;
    justify-content: flex-end;
    margin-top: -20px;
    bottom: 0;
    right: -20px;

    & img {
      justify-content: flex-end;
      width: 180px;
    }
  }
`;

const Bloco1V2 = () => {
  return (
    <Container>
      <AgriculturaFamiliar>
        <Background />
        <h2 className='title'>AGRICULTURA FAMILIAR NO ENFRENTAMENTO ÀS MUDANÇAS CLIMÁTICAS</h2>
        <InfoText>
          A crise do clima é uma realidade que já impacta a vida de
          milhões de pessoas no Brasil e no mundo. A agricultura familiar,
          responsável por grande parte da produção de alimentos do
          país, é um dos setores mais vulneráveis a essa crise.
        </InfoText>

        <div>
          <p>#AgriculturaFamiliareClima</p>
          <p>#SeraQueVaiChover</p>
        </div>

        <Logos>
          <LogoWrapper>
            <img src={logoContag} alt='logo da Contag' />
          </LogoWrapper>
          <LogoWrapper>
            <img src={logoOc} alt='logo do Observatório do Clima' />
          </LogoWrapper>
        </Logos>

        <FrutasWrapper>
          <img src={frutas} alt='frutas' />
        </FrutasWrapper>
      </AgriculturaFamiliar>

      <CarrosselBloco1 />
    </Container>
  )
};

export default Bloco1V2;
