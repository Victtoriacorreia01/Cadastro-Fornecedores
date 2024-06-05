import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../Assets/logosato.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Logo" className="navbar-logo-image" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/cadastrar-fornecedor" className="nav-links">
              Cadastrar Fornecedor
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/lista-fornecedores" className="nav-links">
              Lista de Fornecedores
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
