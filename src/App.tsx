import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Growth from './pages/Growth'
import Learning from './pages/Learning'
import Activities from './pages/Activities'
import Members from './pages/Members'
import Cases from './pages/Cases'
import Portal from './pages/Portal'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/members" element={<Members />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/portal" element={<Portal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
