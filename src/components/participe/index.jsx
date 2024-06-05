import styled from "styled-components";
import mao from '../../assets/images/mao.png';

const Container = styled.section`
    position: relative;
    background-color: #90401d;
    color: #ffd200;
    width: 100%;
    font-weight: 700;
    /* padding: 2rem 3rem 3rem 3rem; */

    & img {
      position: absolute;
      top: 0;
      right: 0;
      width: 230px;
    }
`;

const TextWrapper = styled.div`
  padding: 2rem 0 3rem 3rem;
`

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
          <p>Participe!</p>
          <p>Informações: meioambiente@contag.org.br</p>
        </TextWrapper>
        <img src={mao} alt="mão segurando sementes" />
      </div>
    </Container>
  )
};

export default Participe;
