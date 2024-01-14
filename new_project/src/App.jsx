import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './features/home/home'
import Cart from './features/cart/Cart'
import SideBar from './components/SideBar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function App() {
   const dispatch = useDispatch()
   useEffect(() => {
    
   }, [])
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/categories/:id' element={<SideBar/>}/>
        
      </Route>

    </Routes> 
  )
}

export default App
