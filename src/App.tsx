
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import Home from './pages/Home'
import Products from './pages/Products'
function App() {

  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Products />} path='/products'/>
      </Routes>
    </>
  )
}

export default App
