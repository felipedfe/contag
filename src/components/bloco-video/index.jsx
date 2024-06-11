import styled from 'styled-components';
import VideoContainer from '../video-container';

const Container = styled.section`
  width: 100%;
  padding: 0 3rem;

  &:hover {
    cursor: pointer;
  }

  @media all and (max-width: 900px) {
    padding: 0;
  }
`;

const BlocoVideo = () => {
  return (
    <Container>
      <VideoContainer
        url='https://www.youtube.com/embed/X110K8HEWhA'
        controls='1'
      />
    </Container>
  )
};

export default BlocoVideo;
