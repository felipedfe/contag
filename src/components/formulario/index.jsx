import React, { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  // Substitua esta URL pela URL que você obteve ao implantar seu Google Apps Script
  // const url = '/api';
  const url = 'https://script.google.com/macros/s/AKfycbzCtfkm2V0zexH7-fKBj1DW3IIWSqe3KibHWHKFsnaDpFyQHUc9a4jQoULAQpTsAGWbxA/exec';

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     // Preparando o corpo da solicitação como JSON
  //     const data = JSON.stringify({ nome, email });
  //     console.log(data)

  //     // Enviando os dados para o Google Apps Script
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       mode: 'cors', // Assegura que CORS seja tratado corretamente
  //       headers: {
  //         'Content-Type': 'application/json', // Usando JSON como content type
  //       },
  //       body: data
  //     });

  //     if (response.ok) {
  //       // Processa a resposta do servidor
  //       const result = await response.json();
  //       console.log(result);
  //       alert('Dados enviados com sucesso!');
  //       // Limpa o formulário após sucesso
  //       setNome('');
  //       setEmail('');
  //     } else {
  //       // Trata erros de resposta não-ok, como 4xx ou 5xx
  //       throw new Error('Falha na resposta da rede');
  //     }
  //   } catch (error) {
  //     // Trata erros de rede ou de programação
  //     console.error('Erro ao enviar dados:', error);
  //     alert('Erro ao enviar dados: ' + error.message);
  //   }
  // };

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
    const data = JSON.stringify({ nome, email });
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
    <form onSubmit={handleSubmit} style={{ marginBottom: '10rem' }}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;

// import React, { useState } from 'react';

// const Formulario = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const url = 'https://eoeyq7dc9iie76m.m.pipedream.net'; // Substitua pela URL do webhook do Pipedream

//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ name, email }),
//             });

//             if (response.ok) {
//                 alert('Dados enviados com sucesso!');
//                 setName('');
//                 setEmail('');
//             } else {
//                 alert('Falha ao enviar os dados.');
//             }
//         } catch (error) {
//             alert('Erro ao enviar os dados');
//             console.error('Erro:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Nome:
//                 <input type="text" value={name} onChange={e => setName(e.target.value)} required />
//             </label>
//             <br />
//             <label>
//                 Email:
//                 <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
//             </label>
//             <br />
//             <button type="submit">Enviarr</button>
//         </form>
//     );
// };

// export default Formulario;

