import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import GreenArea from './components/GreenArea'



function App() {


  return (
    <>
      <div className='w-full h-screen bg-zinc-900 text-white'>
        <Navbar />
        <LandingPage />
        <GreenArea />
      </div>
    </>
  )
}

export default App
