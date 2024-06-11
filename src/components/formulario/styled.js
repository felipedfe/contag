import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 40% 60%;
  background-color: #ffd100;
  width: 100%;

  & h2 {
    font-weight: 800;
    color: #90401d;
    font-size: 20px;
    line-height: 1.5;
  }

  & form {
    height: 100%;
    /* background-color: red; */
    padding: 2rem;
  }

  @media all and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

export const TextAndImageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 0 2rem;

  @media all and (min-width: 1200px) {
    padding-top: 4rem;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: -50px;
  margin-left: -30px;

  & img {
    width: 100%;
    max-width: 200px;
  }

  @media all and (max-width: 600px) {
    margin-bottom: -50px;
    margin-left: 0;
    display: none;

    & img {
    max-width: 140px;
  }
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* display: grid;
  grid-template-rows: 50% 1fr 1fr 1fr; */
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  border: none;
  padding: 8px 10px;
  width: 100%;
  font-size: 15px;

  &::placeholder {
    color: #90401d;
    font-size: 15px;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  resize: none;
  width: 100%;
  height: 70%;
  padding: 8px 10px;
  font-size: 15px;

  &::placeholder {
    color: #90401d;
    font-size: 15 px;
  }

  @media all and (max-width: 600px) {
    height: 300px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #689261;
  color: #fff;
  font-size: 18px;
  padding: 8px;
  font-weight: 800;
  line-height: 1.2;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  margin-top: 8px;

  @media all and (min-width: 700px) {
     &:hover {
       background-color: #71a668;
     }
  }
`;
