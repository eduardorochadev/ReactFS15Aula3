import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Sobre from './pages/Sobre'
import Home from './pages/home'
import Contato from './pages/Contato'
import NotFound from './pages/NotFound'
import PageLayout from './layouts/PageLayout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/contato' element={<Contato/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App