import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  background-color: #cf850c;
  width: 100%;
  padding: 2rem;

  & .title {
    background-color: #903f1c;
  }

  & .slick-prev, .slick-next {
    height: 40px;
  }

  @media all and (max-width: 1024px) {
    grid-template-columns: 100%;
    gap: 2rem;
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
    line-height: 1.5;

    @media all and (max-width: 1024px) {
      padding-left: 0;
    }
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

  @media all and (max-width: 600px) {
    grid-template-columns: 100%;
    gap: 1rem;
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
  /* max-width: 60px; */
  justify-content: flex-start;
  margin-left: -5px;

  & img {
    width: 70px;
    height: 70px;
  }

  /* & img {
    width: 100%;
  } */
`;