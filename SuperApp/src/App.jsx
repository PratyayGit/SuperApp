import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Registration from './pages/Registration'
import Category from './pages/Category'
import Home from './pages/Home'
import BrowseEntertainment from './pages/BrowseEntertainment'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/browseentertainment' element={<BrowseEntertainment/>}/>
        <Route path='/browseentertainment/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
