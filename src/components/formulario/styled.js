import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 40% 60%;
  background-color: #ffd100;

  & h2 {
    font-weight: 800;
    color: #90401d;
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const TextAndImageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 0 2rem;
`;

export const ImageWrapper = styled.div`
  margin-bottom: -50px;
  margin-left: -30px;

  & img {
    width: 100%;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  padding: 8px 10px;
  width: 100%;

  &::placeholder {
    color: #90401d;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  resize: none;
  width: 100%;

  &::placeholder {
    color: #90401d;
  }
`;

export const SubmitButton = styled.button`
  background-color: #fff;
`;
