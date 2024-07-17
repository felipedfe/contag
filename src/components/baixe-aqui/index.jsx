import styled from 'styled-components';
import cartilha from '../../assets/images/cartilha.png';

const Container = styled.section`
  background-color: #689261;
  display: grid;
  grid-template-columns: 55% 45%;
  padding: 2rem 0 1rem 0;
  overflow: hidden;

  & img {
    width: 100%;
  }

  @media all and (max-width: 600px) {
    grid-template-columns: 100%;
    gap: 1rem;

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
  padding: 0 2.5rem 0 2rem;

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

const DownloadButton = styled.button`
  color: #90401d;
  background-color: #ffd100;
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
       background-color: #ffdf4e;
     }
  }
`;

const BaixeAqui = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Cartilha_CONTAG_WEB_v3.pdf';
    link.download = 'cartilha-contag.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <img src={cartilha} alt='cartilha para baixar' draggable="false" />
      <Info>
        <p>Conheça mais sobre essa questão fazendo o download da cartilha</p>
        <DownloadButton onClick={handleDownload}>
          BAIXE AQUI
        </DownloadButton>
      </Info>
    </Container>
  )
};

export default BaixeAqui;
