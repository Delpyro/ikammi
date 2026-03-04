import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { HeroCarousel } from './components/herocarousel/HeroCarousel';
import { Sejarah } from './components/sejarah/Sejarah';
import { Pengurus } from './components/pengurus/Pengurus';
import { Galeri } from './components/galeri/Galeri';
import { ContactForm } from './components/contactform/ContactForm';
// import { TentangKami } from './components/TentangKami';
import { GaleriPage } from './components/galeripage/GaleriPage';
import { About } from './components/about/About';
import { Footer } from './components/footer/Footer';

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
      <div id="ContactForm">
        <ContactForm />
      </div>
      <div id="footer">
        <Footer  />
      </div>
    </>
  );
}

function Galeripage(){
  return(
    <>
      <div id="galeri">
        <GaleriPage  />
      </div>
      <div id="footer">
        <Footer  />
      </div>
    </>
  )
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
          <Route path="/galeri" element={<Galeripage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;