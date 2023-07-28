import React from 'react';

const Header: React.FC = () => (
  <header className="bg-purple-700 text-white p-4">
    <div className="flex items-center justify-between mx-56">
      <div className="flex items-center">
        <img
          src="https://reprograma.com.br/wp-content/uploads/2023/02/Logo-reprograma-branco.svg"
          alt="Logo da Reprograma"
          className="max-h-12 mr-4"
        />
        <h2 className="font-semibold text-2xl hover:text-purple-300">Educa&#123;Devas&#125;</h2>
      </div>
      <nav className="flex space-x-4">
        <a href="#" className="hover:text-purple-300">Home</a>
        <a href="#" className="hover:text-purple-300">Sobre</a>
        <a href="#" className="hover:text-purple-300">Contato</a>
      </nav>
    </div>
  </header>
);

export default Header;
