import './style.css'

export function Footer() {
  return (
    <footer className="c-footer">
      <div className="c-footer__address">
        <p className="c-footer__text">Dúvidas? Entre em contacto</p>
        <a className="c-footer__tel" href="tel:+244927000000">
          <img src="/images/phone.svg" alt="" />
          +244 927 000 000
        </a>
        <a className="c-footer__email" href="mailto:sks@gmail.com">
          <img src="/images/email.svg" alt="" />
          sks@gmail.com
        </a>
        <p className="c-footer__hour">
          <span>Segunda à Sexta, 19 às 21h</span>
          <span>Sábado, 07h às 09h</span>
        </p>
        <p className="c-footer__sensei">
          <span>Sensei Emanuel Gomes</span>
          <span>Instrutor JKA 2º Dan</span>
        </p>
      </div>
      <div className="c-footer__location">
        <h3 className="c-footer__subtitle">Onde estamos</h3>
        <p className="c-footer__text">
          <span>Luanda, Cidade do Sequele</span>
          <span>Rua nº 08 - Bloco 03 - Prédio 03</span>
          <span>Dojo SKS</span>
        </p>
      </div>
      <div className="c-footer__social-media">
        <h3 className="c-footer__subtitle">Redes sociais</h3>
        <ul className='c-social-media'>
          <li className='c-social-media__insta'>
            <img src="/images/instagram.svg" alt="" />
          </li>
          <li className='c-social-media__youtube'>
            <img src="/images/youtube.svg" alt="" />
          </li>
        </ul>
        <div className='c-footer__copyright'>
          <p className='c-footer__text'>
            © 2023 SKS | Todos os Direitos Reservados
            <span>Designed and Powered by:</span>
          </p>
        </div>
        <div className='c-author'>
          <picture className='c-author__image'>
            <img src="/images/linus.svg" alt="Developer Linus" />
          </picture>
          <p className='c-author__description'>
            <a href="https://www.linkedin.com/in/linusmanuel/" target="_blank" rel="noopener noreferrer">
              <span>Joao Lino, AKA Linus ❤️</span>
              <span>FullStack Developer</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}