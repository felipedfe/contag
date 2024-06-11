import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: relative;
  padding: 56.25% 0 0 0;
  width: 100%;
  aspect-ratio: ${(props) => props.$aspectRatio};

  &:hover {
    cursor: pointer;
  }
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`

const PlaceholderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  /* display: ${(props) => props.show ? 'block' : 'none'}; */
  z-index: 99;

  &:hover {
    cursor: pointer;
  }
`

export {
  VideoWrapper,
  Video,
  PlaceholderImage,
}