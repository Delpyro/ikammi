import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { Sejarah } from './components/Sejarah';
import { Pengurus } from './components/Pengurus';
import { Galeri } from './components/Galeri';
import { TentangKami } from './components/TentangKami';
import { GaleriPage } from './components/GaleriPage';
import { About } from './components/About';
import { Footer } from './components/Footer';

// Komponen untuk membungkus semua section di Homepage
function Homepage() {
  return (
    <>
      <div id="home">
        <HeroCarousel />
      </div>
      {/* <div id="profil">
        <TentangKami />
      </div> */}
      <div id="profil">
        <About />
      </div>
      <div id="sejarah">
        <Sejarah />
      </div>
      <div id="pengurus">
        <Pengurus />
      </div>
      <div id="galeri">
        <Galeri />
      </div>
      <div id="profil">
        <Footer  />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          {/* Jalur untuk Homepage */}
          <Route path="/" element={<Homepage />} />
          
          {/* Jalur untuk Halaman Full Galeri */}
          <Route path="/galeri" element={<GaleriPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;