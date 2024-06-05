import styled from 'styled-components';
import frutas from '../../assets/images/frutas.png';

const Container = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 30% 50% 20%;
  background-color: #ffd100;
  /* clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%); */
  padding: 2rem 0;
  width: 100%;

  @media all and (max-width: 1024px) {
    grid-template-columns: 30% 70%;
  }
`;

const FormacaoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  padding: 0 3rem;

  & h2 {
    background-color: #cd450a;
  }

  & p {
    color: #90401d;
    padding-left: 1.3rem;
    font-weight: 700;
  }
`;

const TextoEFrutas = styled.div`

`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;

  & p {
    color: #90401d;
  }
`;

const FrutasWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  /* background-color: red; */

  & img {
    width: 250px;
  }

  @media all and (max-width: 1200px) {
    & img {
      width: 200px;
    }
  }

  @media all and (max-width: 1024px) {
    position: unset;
    justify-content: flex-end;

    & img {
      justify-content: flex-end;
    }
  }
`;

const Bloco1 = () => {
  return (
    <Container>
      <FormacaoWrapper>
        <h2 className='title' >FORMAÇÃO <br></br> NACIONAL</h2>
        <p>
          Impactos das mudanças
          climáticas e contribuições
          da agricultura familiar no
          contexto da COP30 no
          Brasil
        </p>
      </FormacaoWrapper>

      <TextoEFrutas>
        <TextWrapper>
          <p>
            Cada vez mais vemos mudanças radicais nos regimes de
            chuvas, precipitações intensas, alagamentos, secas e ondas de
            calor. Esses são apenas alguns dos eventos que acontecem de
            maneira mais presente e mais forte, prejudicando a produção de
            alimentos. Isso põe em risco o meio de vida dos trabalhadores e
            ameaça a soberania alimentar.
          </p>
          <p>
            É por isso que esse setor precisa agir para ser parte da solução
            – e, sabemos, existe um grande potencial para isso. As práticas
            de cultivo e manejo do solo típicas da agricultura familiar são em
            geral mais sustentáveis e menos baseadas no desmatamento.
          </p>
          <p>
            Mas, para que os agricultores e agricultoras familiares
            consigam produzir de forma mais sustentável, mantendo suas
            práticas com menos emissões de carbono, algumas ações são
            necessárias.
          </p>
        </TextWrapper>
        <FrutasWrapper>
          <img src={frutas} alt='frutas' />
        </FrutasWrapper>
      </TextoEFrutas>
    </Container>
  )
};

export default Bloco1;
