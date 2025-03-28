import './App.css'

import LoadCards from './assets/components/RicercaUtenti'
import CardDetails from './assets/components/CardDetails'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoadCards/>}/>
        <Route path='/card/:id' element={<CardDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
