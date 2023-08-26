import Hamburger from '../hamburger/hamburger';
import './style.css';
export function Menu() {
  return (
    <nav className='c-menu'>
      <picture className='c-logo'>
        <a href="#">
          <img src="/images/sks.png" alt="Dojo Logo" />
        </a>
      </picture>
      <ul className="c-menu__list">
        <li><a href="#">Inicial</a></li>
        <li><a href="#">Inicial</a></li>
        <li><a href="#">Inicial</a></li>
        <li><a href="#">Inicial</a></li>
      </ul>
      <button className='c-btn c-btn--primary'>Matricule-se</button>
      <Hamburger></Hamburger>
    </nav>
  )
}