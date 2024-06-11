import React, { useState } from 'react';

import {
  Container,
  Input,
  InputsWrapper,
  SubmitButton,
  TextArea,
  TextAndImageWrapper,
  ImageWrapper,
} from './styled';
import legumes from '../../assets/images/legumes.png';

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const url = 'https://script.google.com/macros/s/AKfycbx18nSNLSxcQgGRao_z1fcwiwUCfLokww6Y1fO17yg-fvK8GtJxQ98EhL76jVWmUWfQMA/exec';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const data = JSON.stringify({ nome, email, mensagem });
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data
      });

      console.log('Dados enviados, resposta não disponível devido ao modo no-cors');
      setSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <TextAndImageWrapper>
        <h2>
          COMO VOCÊ ESTÁ
          ENFRENTANDO
          AS MUDANÇAS
          CLIMÁTICAS
          NA SUA
          PROPRIEDADE E
          NA SUA REGIÃO?
        </h2>
        <ImageWrapper>
          <img src={legumes} alt='ilustração de legumes na terra' draggable="false" />
        </ImageWrapper>
      </TextAndImageWrapper>
      <form onSubmit={handleSubmit}>
        <InputsWrapper>
          {!submitted && !isLoading ? (
            <>
              <TextArea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Escreva aqui o seu relato"
                required
              />
              <Input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome"
                required
              />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <SubmitButton type="submit">ENVIAR</SubmitButton>
            </>
          ) : (
            <p className='relato'>{isLoading ? "Enviando..." : "Relato enviado :)"}</p>
          )}
        </InputsWrapper>
      </form>
    </Container>
  );
}

export default Formulario;
