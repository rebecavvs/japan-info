import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 - Todos os direitos reservados.</p>
      <p>Contato: <a href="mailto:contato@japaninfo.com">contato@japaninfo.com</a></p>
      <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" width="30" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png" alt="Instagram" width="30" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Twitter_logo_2021.svg" alt="Twitter" width="30" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
