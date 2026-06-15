import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Productos from './pages/Productos';
import Servicios from './pages/Servicios';
import DondeEncontrarnos from './pages/DondeEncontrarnos';
import Contacto from './pages/Contacto';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/donde-encontrarnos" element={<DondeEncontrarnos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;