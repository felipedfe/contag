import styled from "styled-components";
import BaixeAqui from "../baixe-aqui";
import Formulario from "../formulario";

const Container = styled.section`
  display: grid;
  grid-template-columns: 52% 46%;
  gap: 2rem;
  width: 100%;

  @media all and (max-width: 1024px) {
    grid-template-columns: 100%;
}
`;

const Bloco2 = () => {
  return (
    <Container>
      <Formulario />
      <BaixeAqui />
    </Container>
  )
};

export default Bloco2;
