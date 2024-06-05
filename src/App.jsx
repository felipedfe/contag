import './App.css';
import banner from '../src/assets/images/banner.jpg';
import cartilha from '../src/assets/images/cartilha.png';
import VideoContainer from './components/video-container';
import ContactForm from './components/contact-form';
import Podcast from './components/podcast-container';
import Participe from './components/participe';
import Bloco1 from './components/bloco1';

function App() {

  return (
    <main>
      <section className='content'>
        {/* Banner */}
        <img
          style={{ width: '100%' }}
          src={banner}
          alt='banner Será que vai chover? Agricultura familiar e clima' />

        {/* Bloco 1 Formacao Nacional */}
        <section className='bloco-1'>
          <div className='bloco-1-div-1'>
            <h2 className='title' >FORMAÇÃO <br></br> NACIONAL</h2>
            <p style={{ color: '#90401d' }}>
              Impactos das mudanças
              climáticas e contribuições
              da agricultura familiar no
              contexto da COP30 no
              Brasil
            </p>
          </div>
          <div className='bloco-1-div-2' style={{ color: '#90401d' }}>
            <p >
              Cada vez mais vemos mudanças radicais nos regimes de
              chuvas, precipitações intensas, alagamentos, secas e ondas de
              calor. Esses são apenas alguns dos eventos que acontecem de
              maneira mais presente e mais forte, prejudicando a produção de
              alimentos. Isso põe em risco o meio de vida dos trabalhadores e
              ameaça a soberania alimentar.
            </p>
            <p>
              É por isso que esse setor precisa agir para ser parte da solução
              – e, sabemos, existe um grande potencial para isso. As práticas
              de cultivo e manejo do solo típicas da agricultura familiar são em
              geral mais sustentáveis e menos baseadas no desmatamento.
            </p>
            <p>
              Mas, para que os agricultores e agricultoras familiares
              consigam produzir de forma mais sustentável, mantendo suas
              práticas com menos emissões de carbono, algumas ações são
              necessárias.
            </p>
          </div>
        </section>

        <Bloco1 />

        {/* Bloco 2 Datas e Baixe aqui */}
        <section className='bloco-2'>
          {/* Datas */}
          <section className='datas'>
            <div className='datas-div-1'>
              <h2 className='title'>DATAS</h2>

              <div className='datas-div-itens'>
                <div className='datas-item'>
                  <p className='datas-item-titulo'>Oficina do centro-oeste:</p>
                  <p className='datas-item-conteudo'>14 a 16 de maio, brasília</p>
                </div>
              </div>

              <div className='datas-div-itens'>
                <div className='datas-item'>
                  <p className='datas-item-titulo'>Oficinas nordeste 1 e 2:</p>
                  <p className='datas-item-conteudo'>4 a 6 de junho (xxx):</p>
                  <p className='datas-item-conteudo'>4 a 6 de junho (xxx)</p>
                </div>
              </div>

              <div className='datas-div-itens'>
                <div className='datas-item'>
                  <p className='datas-item-titulo'>Oficina sul:</p>
                  <p className='datas-item-conteudo'>23 a 25 de julho (SC)</p>
                </div>
              </div>
            </div>

            <div className='datas-div-2'>
              <div className='datas-div-itens'>
                <div className='datas-item'>
                  <p className='datas-item-titulo'>Oficinas nordeste 1 e 2:</p>
                  <p className='datas-item-conteudo'>4 a 6 de junho (xxx):</p>
                  <p className='datas-item-conteudo'>4 a 6 de junho (xxx)</p>
                </div>
              </div>

              <div className='datas-div-itens'>
                <div className='datas-item'>
                  <p className='datas-item-titulo'>Oficina sul:</p>
                  <p className='datas-item-conteudo'>23 a 25 de julho (SC)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Baixe aqui */}
          <section className='baixe'>
            <img
              style={{ width: '100%' }}
              src={cartilha}
              alt='cartilha' />

            <div className='baixe-div-1'>
              <p>Conheça mais sobre essa questão fazendo o download da cartilha</p>
              <h3 className='title'>BAIXE AQUI</h3>
            </div>
          </section>
        </section>

        {/* Bloco 3 Vídeo */}
        <section
          style={{ width: '100%', padding: '0 3rem' }}>
          <VideoContainer
            url="https://player.vimeo.com/video/943833148?h=b3d0b8570c"
            controls="1"
          />
        </section>

        {/* Bloco 4 */}
        <Podcast />

        {/* Bloco 5 */}
        <Participe />


        {/* <div style={{ height: '100vh', width: '100%' }}>
          <iframe src="https://www.utopika.com.br/sobre" width="100%" height="100%" style={{ border: 'none' }}></iframe>
        </div> */}

        <ContactForm />

      </section>
    </main>
  )
}

export default App
