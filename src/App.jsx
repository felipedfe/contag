import banner from '../src/assets/images/banner.jpg';
import cartilha from '../src/assets/images/cartilha.png';
import ContactForm from './components/contact-form';
import Podcast from './components/podcast-container';
import Participe from './components/participe';
import Bloco1 from './components/bloco1';
import BlocoVideo from './components/bloco-video';
import BaixeAqui from './components/baixe-aqui';
import Formulario from './components/formulario';
import './App.css';
import Bloco1V2 from './components/bloco1-v2';
import Bloco2 from './components/bloco-2';

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

        <Bloco1 />
        <Bloco1V2 />

        {/* <section className='bloco-2'>
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

          <BaixeAqui />
        </section> */}

        {/* Bloco 2 */}
        <Bloco2 />

        {/* Bloco 3 */}
        <BlocoVideo />

        {/* Bloco 4 */}
        <Podcast />

        {/* Bloco 5 */}
        <Participe />


        {/* <div style={{ height: '100vh', width: '100%' }}>
          <iframe src='https://www.utopika.com.br/sobre' width='100%' height='100%' style={{ border: 'none' }}></iframe>
        </div> */}

        {/* <ContactForm /> */}

        <Formulario />

      </section>
    </main>
  )
}

export default App
