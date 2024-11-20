import React from 'react';
import Carrosel from '../components/Carrosel';
import ResumoHistoria from '../components/ResumoHistoria';
import ResumoSite from '../components/ResumoSite';
import DestaqueMes from '../components/DestaqueMes';
import Avaliacao from '../components/Avaliacao';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  return (
    <main>
      <Header />

      <h1>Bem-vindo ao Site sobre o Japão!</h1>

      {/* Carrossel de imagens */}
      <Carrosel />

      {/* Resumo da História do Japão */}
      <ResumoHistoria />

      {/* Breve Resumo do Site */}
      <ResumoSite />

      {/* Destaque do Mês */}
      <DestaqueMes />

      {/* Avaliação */}
      <Avaliacao />

      {/* Rodapé */}
      <Footer />
    </main>
  );
};

export default Home;


