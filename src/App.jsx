import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import bannerDesktop from '../src/assets/images/banner.jpg';
import bannerMobile from '../src/assets/images/banner-mobile.jpg';
import Podcast from './components/podcast-container';
import Participe from './components/participe';
import BlocoLogos from './components/bloco-logos';
import BlocoVideo from './components/bloco-video';
import Bloco1V2 from './components/bloco1-v2';
import Bloco2 from './components/bloco-2';
import './App.css';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <main>
      <section className='content'>
        <img
          style={{ width: '100%' }}
          src={isMobile ? bannerMobile : bannerDesktop}
          alt='Banner Será que vai chover? Agricultura familiar e clima'
        />

        {/* <Bloco1 /> */}
        <Bloco1V2 />

        {/* Bloco 2 */}
        <Bloco2 />

        {/* Bloco 3 */}
        <BlocoVideo />

        {/* Bloco 4 */}
        <Podcast />

        {/* Bloco 5 */}
        <Participe />

        <BlocoLogos />

        {/* <div style={{ height: '100vh', width: '100%' }}>
          <iframe src='https://www.utopika.com.br/sobre' width='100%' height='100%' style={{ border: 'none' }}></iframe>
        </div> */}

        {/* <ContactForm /> */}

        {/* <Formulario /> */}

      </section>
    </main>
  )
}

export default App
