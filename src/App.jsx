import { Bounce, ToastContainer } from 'react-toastify'
import './App.css'
import InputComponent from './components/InputComponent'

function App() {

  return (
    < div className='w-[100%]  flex items-center justify-center h-screen'>
      <InputComponent/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />
    </ div>
  )
}


export default App
