import styled from "styled-components";
import BaixeAqui from "../baixe-aqui";
import Formulario from "../formulario";
import Livro from "../livro";

const Container = styled.section`
  display: grid;
  /* grid-template-columns: 52% 46%; */
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;

  @media all and (max-width: 1024px) {
    grid-template-columns: 100%;
    gap: 1rem;
}
`;

const Bloco2 = () => {
  return (
    <Container>
      {/* <Formulario /> */}
      <Livro />
      <BaixeAqui />
    </Container>
  )
};

export default Bloco2;
