import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="logo">AM</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isOpen ? 'bar1 open' : 'bar1'}></div>
        <div className={isOpen ? 'bar2 open' : 'bar2'}></div>
        <div className={isOpen ? 'bar3 open' : 'bar3'}></div>
      </div>
      <nav className={isOpen ? 'nav-open' : ''}>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;