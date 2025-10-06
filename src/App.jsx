import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import GreenArea from './components/GreenArea'
import About from './components/About'


function App() {


  return (
    <>
      <div className='w-full  bg-zinc-900 text-white'>
        <Navbar />
        <LandingPage />
        <GreenArea />
        <About/>
      </div>
    </>
  )
}

export default App
