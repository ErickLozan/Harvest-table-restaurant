import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Error from './Error'
import Menu from './pages/menu/Menu'
import Gallery from './pages/gallery/Gallery'
import MenuCourse from './pages/menu/MenuCourse/MenuCourse'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/:course' element={<MenuCourse/>} />

        <Route path='/gallery' element={<Gallery />} />

        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
