import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import HaMoadon from './pages/HaMoadon'
import HaKehila from './pages/HaKehila'
import KvutzotTmicha from './pages/KvutzotTmicha'
import Yoatzim from './pages/Yoatzim'
import Metaplim from './pages/Metaplim'
import HaKurs from './pages/HaKurs'
import Podcast from './pages/Podcast'
import HaHazon from './pages/HaHazon'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/המועדון" element={<HaMoadon />} />
          <Route path="/הקהילה" element={<HaKehila />} />
          <Route path="/קבוצות-תמיכה" element={<KvutzotTmicha />} />
          <Route path="/יועצים" element={<Yoatzim />} />
          <Route path="/מטפלים" element={<Metaplim />} />
          <Route path="/הקורס" element={<HaKurs />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/החזון-שלנו" element={<HaHazon />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
