import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  // Página inicial
import ArteEstetica from './pages/ArteEstetica'; 
import PontosTuristicos from './pages/PontosTuristicos'; 
import TradicoesFestivais from './pages/TradicoesFestivais'; 
import Culinaria from './pages/Culinaria'; 
import CulturaPop from './pages/CulturaPop'; 
import Login from './pages/Login'; 
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />  {/* Cabeçalho visível em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arte-estetica" element={<ArteEstetica />} />
        <Route path="/pontos-turisticos" element={<PontosTuristicos />} />
        <Route path="/tradicoes-festivais" element={<TradicoesFestivais />} />
        <Route path="/culinaria" element={<Culinaria />} />
        <Route path="/cultura-pop" element={<CulturaPop />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />  {/* Rodapé visível em todas as páginas */}
    </Router>
  );
}

export default App;

