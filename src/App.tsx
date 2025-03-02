
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import Home from './pages/Home'
import Products from './pages/Products'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Products />} path='/products' />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
