import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './features/home/home'
import Cart from './features/cart/Cart'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Route>

    </Routes> 
  )
}

export default App
