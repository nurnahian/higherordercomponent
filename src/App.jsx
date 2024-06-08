import React from 'react'
import './App.css'
import Deshbord from './components/Deshbord'
import withAppProvider from './withAppProvider'

function App() {
 // const [count, setCount] = useState(0)
  return (
    <>
      <Deshbord/>
    </>
  )
}
export default withAppProvider(App);
