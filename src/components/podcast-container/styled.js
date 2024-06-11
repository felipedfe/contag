import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: #cf850c;
  width: 100%;
  padding: 0 2rem;

  & .title {
    background-color: #903f1c;
  }

  & .slick-prev, .slick-next {
    height: 40px;
  }
  
`;

export const TitleWrapper = styled.div`
  /* background-color: white; */
`;

export const PodcastCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  background-color: green;
  /* width: 600px; */
  border: solid 2px blue;

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