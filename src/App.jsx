
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Players from './Components/Players/Players'

function App() {

  

  return (
    <>
    <div className='w-full'>
      <main className='w-5/6 mx-auto my-4'>
        <Header></Header>
        <Banner></Banner>
        <Players></Players>
      </main>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
