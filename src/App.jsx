import Footer from './components/Footer'
import MainBody from './components/MainBody'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className=' mx-auto flex flex-col justify-between h-screen max-w-[1100px]'>
      <NavBar />
      <MainBody />
      <Footer />
    </div>
  )
}

export default App
