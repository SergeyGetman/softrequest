//@ts-nocheck
// import { useState } from 'react'
import './App.css'
import ButtonNew from './Components/Button'
import AppLing from './Components/Button/TabMenu/TabAccord'
import MyModal from './Components/Button/Modal/MyModal.tsx'
import { useState } from 'react'
// import Accordion from './Components/Button/TabMenu/TabMenu'

// const [activeButton, setActiveBtn] = useState(0)

function App() {
  const [modal, setModal] = useState(false)

  return (
    <div className="App">
      <ButtonNew onClick={() => setModal(true)} />,
      <MyModal visible={modal} setVisible={setModal}>
        {<h1>This is news of world IT</h1>}{' '}
      </MyModal>
      <br />
      <AppLing />
    </div>
  )
}

export default App
