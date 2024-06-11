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

  // Substitua esta URL pela URL que você obteve ao implantar seu Google Apps Script
  // const url = '/api';
  const url = 'https://script.google.com/macros/s/AKfycbzCtfkm2V0zexH7-fKBj1DW3IIWSqe3KibHWHKFsnaDpFyQHUc9a4jQoULAQpTsAGWbxA/exec';

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     try {
  //       // Preparando o corpo da solicitação como JSON
  //       const data = JSON.stringify({ nome, email });
  //       console.log(data)

  //       // Enviando os dados para o Google Apps Script
  //       const response = await fetch(url, {
  //         method: 'POST',
  //         mode: 'cors', // Assegura que CORS seja tratado corretamente
  //         headers: {
  //           'Content-Type': 'application/json', // Usando JSON como content type
  //         },
  //         body: data
  //       });

  //       if (response.ok) {
  //         // Como a resposta esperada é HTML, você pode redirecionar diretamente
  //         // ou fazer algo dependendo do caso de uso
  //         console.log('Dados enviados com sucesso!');
  //         alert('Dados enviados com sucesso!');

  //         // Aqui você pode optar por redirecionar o usuário
  //         window.location.href = 'http://localhost:5173/success.html'; // Modifique conforme necessário

  //         // Limpa o formulário após sucesso
  //         setNome('');
  //         setEmail('');
  //       } else {
  //         // Trata erros de resposta não-ok, como 4xx ou 5xx
  //         throw new Error('Falha na resposta da rede');
  //       }
  //     } catch (error) {
  //       // Trata erros de rede ou de programação
  //       console.error('Erro ao enviar dados:', error);
  //       alert('Erro ao enviar dados: ' + error.message);
  //     }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Preparando o corpo da solicitação como JSON
      const data = JSON.stringify({ nome, email, mensagem });
      console.log(data)

      // Enviando os dados para o Google Apps Script
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors', // Modo no-cors para evitar problemas de CORS
        headers: {
          'Content-Type': 'application/json', // Usando JSON como content type
        },
        body: data
      });

      // Com o modo no-cors, o estado 'ok' da resposta não é legível, e não há acesso ao corpo da resposta
      console.log('Dados enviados, resposta não disponível devido ao modo no-cors');
      alert('Dados enviados com sucesso!');

      // Aqui você pode optar por redirecionar o usuário
      // window.location.href = 'http://localhost:5173/success.html';

      // Limpa o formulário após sucesso
      setNome('');
      setEmail('');
    } catch (error) {
      // Trata erros de rede ou de programação
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao enviar dados: ' + error.message);
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
          <img src={legumes} alt='ilustracao de legumes na terra' />
        </ImageWrapper>
      </TextAndImageWrapper>
      <form onSubmit={handleSubmit}>
        <InputsWrapper>
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
          <SubmitButton type="submit">Enviar</SubmitButton>
        </InputsWrapper>
      </form>
    </Container>
  );
}

export default Formulario;
