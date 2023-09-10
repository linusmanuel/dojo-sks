import { ArrowSVG } from '../gallery/gallery'
import './style.css'

export function Card() {
  return (
    <article className='c-card c-card--blog'>
      <picture className='c-card__cover'>
        <img src="/images/banner1.jpg" alt="" />
      </picture>
      <div className='c-card__body'>
        <ul className='c-card__categories'>
          <li className='c-card__category'>
            <a href="#">Novo</a>
          </li>
          <li className='c-card__category'>
            <a href="#">Blog</a>
          </li>
        </ul>
        <h3 className="c-card__title">
          Shotokan Karate Sequele realiza treino colectivo...
        </h3>
        <p className="c-card__description">
          Lorem ipsum dolor sit amet, consectetaur adipisicing 
          elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua.
        </p>
        <a className="c-card__link" href="#">Leia mais <ArrowSVG/></a>
      </div>
    </article>
  )
}