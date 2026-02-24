import Footer from './components/Footer'
import MainBody from './components/MainBody'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col justify-between h-screen'>
      <NavBar />
      <MainBody />
      <Footer />
    </div>
  )
}

export default App
