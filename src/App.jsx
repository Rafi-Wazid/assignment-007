

import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Players from './Components/Players/Players'
import { ToastContainer, toast , Bounce } from 'react-toastify';


function App() {


  const [currentBalance , setCurrentBalance] = useState(0);
  const [selectedPlayers , setSelectedPlayers] = useState([]);

  const handleClaimFreeBtn = () => {
    setCurrentBalance(currentBalance + 2500000)
    toast.success('Credit added to your account')  
  }
 
  return (
    <>
    <div className='w-full'>
      <main className='md:w-5/6 mx-auto my-4 pb-16 bg-white relative z-0'>
        <Header currentBalance={currentBalance}></Header>
        <Banner handleClaimFreeBtn={handleClaimFreeBtn}></Banner>
        <Players
          currentBalance={currentBalance}
          setCurrentBalance={setCurrentBalance}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></Players>
      </main>
      <Footer></Footer>
      </div>
      <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
       />
    </>
  )
}

export default App
