import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  background-color: #cf850c;
  width: 100%;
  padding: 2rem;

  & .title {
    background-color: #903f1c;
  }

  & .slick-prev, .slick-next {
    height: 40px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-right: 3rem;

  & p {
    color: #fff;
    font-weight: 800;
    padding-left: 1rem;
  }

  & .slogan {
    color: #ffd200;
    font-size: 20px;
  }
`;

export const PodCastWrapper = styled.section`
  /* padding: 0 2rem;
  background-color: red; */
`;

export const PodcastCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;

  &>img {
      width: 100%;
  }
`;

export const PodcastTitle = styled.h3`
  color: #ffd200;
  font-weight: 800;
`;

export const Description = styled.p`
  color: #fff;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const IconWrapper = styled.div`
  display: flex;
  max-width: 60px;
  margin-left: -10px;
`;