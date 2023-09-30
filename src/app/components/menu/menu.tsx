'use client'

import { useState } from 'react';
import Hamburger from '../hamburger/hamburger';
import './style.css';

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHambugerOpen, setIsHamburgerOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsHamburgerOpen(!isHambugerOpen)
  }

  const menuClass = isMenuOpen? 'c-menu open' : 'c-menu';
  const buttonClass = isHambugerOpen? 'c-btn--hamburger open' : 'c-btn--hamburger';

  return (
    <nav className={menuClass}>
      <picture className='c-logo'>
        <a href="#">
          <img src="/images/sks.png" alt="Dojo Logo" />
        </a>
      </picture>
      <ul className="c-menu__list">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Time</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
      <button className='c-btn c-btn--primary'>Matricule-se</button>
      <button className={buttonClass} onClick={toggle}>
        <span className="c-btn--hamburger__line"></span>
        <span className="c-btn--hamburger__line"></span>
        <span className="c-btn--hamburger__line"></span>
		</button>
    </nav>
  )
}