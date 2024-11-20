import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Japan Info</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/arte-estetica">Arte e Estética</Link></li>
          <li><Link to="/pontos-turisticos">Pontos Turísticos</Link></li>
          <li><Link to="/tradicoes-festivais">Tradições e Festivais</Link></li>
          <li><Link to="/culinaria">Culinária</Link></li>
          <li><Link to="/cultura-pop">Cultura Pop</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
