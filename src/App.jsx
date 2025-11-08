import './App.css'
import LocomotiveScroll from 'locomotive-scroll';
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import GreenArea from './components/GreenArea'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Reviews from './components/Reviews';
import StartProject from './components/StartProject';
import Footer from './components/Footer';


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className='w-full h-auto bg-[#f1f1f1] text-white'>
        <div className='bg-zinc-900'>
          <Navbar />
          <LandingPage />
          <GreenArea />
        </div>
        <About />

        <Eyes />
        <div>
          <Featured
            image1={"https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"}
            image2={"https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"}
            whiteDoth1="Salience Labs"
            whiteDoth2="Medallia Experience"
            animyText1="SALIENCE LABS"
            animyText2="MEDALLIAL EXPEPIENCE"
          />

          <Featured
            image1={"https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"}
            image2={"https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png"}
            whiteDoth1="AH2 & Matt Horn"
            whiteDoth2="Vise"
            className='hidden mt-[20]'
            animyText1="A2H MATTHORN"
            animyText2="VISE"
          />

          <Featured
            image1={"https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg"}
            image2={"https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"}
            whiteDoth1="soft start"
            whiteDoth2="fyde"
            className='hidden mt-[20]'
            animyText1="SOFT START"
            animyText2="FYDE"
          />
        </div>

        <Reviews />
        <StartProject />
        <Footer />






      </div>
    </>
  )
}

export default App
