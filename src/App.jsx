import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import GreenArea from './components/GreenArea'
import About from './components/About'
import Eyes from './components/Eyes'


function App() {


  return (
    <>
      <div className='w-full  bg-zinc-900 text-white'>
        <Navbar />
        <LandingPage />
        <GreenArea />
        <About />
        <Eyes />
      </div>
    </>
  )
}

export default App
