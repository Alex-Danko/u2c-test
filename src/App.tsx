import { useState } from 'react'
import './App.css'
import { Popup } from './components/Popup/Popup'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <>
      <div className='button-wrapper'>
        <button onClick={() => setPopupOpen(true)} className='open-btn'>
          Рассчёт платежей
        </button>
      </div>
      <AnimatePresence>
        {popupOpen && (<Popup setPopupOpen={setPopupOpen} />)}
      </AnimatePresence>
    </>
  )
}

export default App
