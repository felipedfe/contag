import styled from 'styled-components';
import livro from '../../assets/images/livro-crop-2.png';

const Container = styled.section`
  background-color: #ffd100;
  display: grid;
  /* grid-template-columns: 55% 45%; */
  grid-template-columns: 1fr 1fr;
  padding: 2rem 0 1rem 0;
  overflow: hidden;
  align-items: center;

  & img {
    width: 100%;
  }

  @media all and (max-width: 600px) {
    grid-template-columns: 100%;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;

    & img {
      width: 80%;
      margin: auto;
      transform: translateX(-15%);
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 0 2rem 0 2rem;

  & p {
    color: #fff;
    line-height: 1.5;
    font-weight: 800;
    font-size: 20px;
  }

  & h3 {
    font-size: 20px;
    background-color: #ffd100;
    color: #90401d;
    text-align: center;
    padding: 8px;
  }

  @media all and (max-width: 700px) {
    padding: 0 4rem 1rem 2rem;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;

  @media all and (max-width: 500px) {
    display: flex;
    justify-content: center;
  }
`;

const DownloadButton = styled.button`
  color: #f0f0f0;
  background-color: #cd450a;
  font-size: 22px;
  padding: 8px;
  font-weight: 800;
  line-height: 1.2;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  border: none;
  cursor: pointer;

  @media all and (min-width: 700px) {
     &:hover {
       background-color: #ce6336;
     }
  }
`;

const Title = styled.p`
  color: #903F1C!important;

  & span {
    color: #cd450a;
    font-weight: 800;
  }

  @media all and (max-width: 500px){
    text-align: center;
  }
`;

const Image = styled.img`
  /* max-height: 445px; */
  /* max-width: 320px; */
  padding-left: 4rem;
`;

const Livro = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Cartilha_TAXONOMIA_v1.pdf';
    link.download = 'cartilha-contag.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenPDF = () => {
    window.open('/Cartilha_TAXONOMIA_v1.pdf', '_blank');
  };

  return (
    <Container>
      <Image src={livro} alt='livro para baixar' draggable="false" />
      <Info>
        <Title>Agricultura familiar e sistemas alimentares: <span>remoção de carbono e transição justa</span></Title>
        <ButtonWrapper>
          <DownloadButton onClick={handleOpenPDF}>
            CLIQUE AQUI
          </DownloadButton>
        </ButtonWrapper>
      </Info>
    </Container>
  )
};

export default Livro;
