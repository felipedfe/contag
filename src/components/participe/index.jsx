import styled from "styled-components";
import mao from '../../assets/images/mao.png';

const Container = styled.section`
    position: relative;
    background-color: #90401d;
    color: #ffd200;
    width: 100%;
    font-weight: 800;
    /* padding: 2rem 3rem 3rem 3rem; */

    @media all and (max-width: 700px) {
      overflow: hidden;
    }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0 3rem 3rem;
  z-index: 1;

  & p {
    font-size: 22px;
  }

  & .participe {
    font-weight: 800;
  }

  & .info {
    width: 70%;

    @media all and (max-width: 900px) {
      width: 60%;
    }
  }

  @media all and (max-width: 700px) {
    text-align: center;
    gap: 12px;
    padding: 4rem 2rem 3rem 2rem;

    & .participe {
      font-size: 20px;
    }

    & .info {
    width: 100%;
    font-size: 20px;
  }
  }
`

const Mao = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 230px;
  z-index: 0;

  @media all and (max-width: 700px) {
      width: 170px;
      top: -25px;
      right: -60px;
    }
`;

const Participe = () => {
  return (
    <Container>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <TextWrapper>
          <p className='participe'>Participe da conversa!</p>
          <p className='info'>
            Use as hashtags #Seraquevaichover e #AgriculturaFamilareClima nas redes sociais para
            compartilhar suas ideias e experiências sobre a agricultura familiar e a crise do clima.
          </p>
        </TextWrapper>
        <Mao src={mao} alt="mão segurando sementes" />
      </div>
    </Container>
  )
};

export default Participe;
