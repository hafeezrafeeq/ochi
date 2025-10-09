import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import GreenArea from './components/GreenArea'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/featured'


function App() {
  

  return (
    <>
      <div className='w-full  bg-zinc-900 text-white'>
        <Navbar />
        <LandingPage />
        <GreenArea />
        <About />
        <Eyes />
        <Featured 
        image={"https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"}
        whiteDoth="Salience Labs"
        btnText="BRAND  IDENTITY"

        />
      </div>
    </>
  )
}

export default App
