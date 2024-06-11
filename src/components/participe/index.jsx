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
  padding: 2rem 0 3rem 3rem;

  @media all and (max-width: 700px) {
    text-align: center;
    gap: 12px;
    padding: 4rem 2rem 3rem 2rem;

    & .participe {
      font-size: 20px;
    }
  }
`

const Mao = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 230px;

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
          <p className='participe'>Participe!</p>
          <p>Informações: meioambiente@contag.org.br</p>
        </TextWrapper>
        <Mao src={mao} alt="mão segurando sementes" />
      </div>
    </Container>
  )
};

export default Participe;
