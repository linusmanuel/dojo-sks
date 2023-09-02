import './style.css'
export function About() {
  return (
    <section className="b-about">
      <picture className="b-about__image">
        <img src="/images/image-4.jpg" alt="Dojo piture" />
      </picture>
      <div className="b-about__content">
        <h4 className="b-about__subtitle">JKA ANGOLA</h4>
        <h3 className="b-about__title">Escola de Karate Shotokan do Sequele - SKS</h3>
        <p className="b-about__text">
          <span>Sensei Emanuel Gomes</span>
          O Dojo SKS foi fundado em agosto de 2022 pelo Sensei Emanuel Gomes, com o 
          objetivo de promover o treinamento de Karate-Do autêntico e de alta qualidade. 
          Localizado em Angola, o dojo tem orgulho de estar associado à JKA Angola, uma 
          renomada organização internacional de Karate.
        </p>
        <p className="b-about__text">
          No Dojo SKS, acreditamos que o 
          Karate-Do é muito mais do que uma arte marcial. É uma disciplina que molda o 
          corpo e a mente, desenvolve a autoconfiança, o respeito e a perseverança. 
          Nossa missão é proporcionar um ambiente acolhedor e inspirador, onde os alunos 
          possam explorar e desenvolver seu potencial máximo.
          <span>Oss</span>
        </p>
        <div className="b-about__buttons">
          <a className="c-btn c-btn--primary" href="#">Saiba mais</a>
          <a className="c-btn c-btn--secondary"href="#">Entre em contato</a>
        </div>
      </div>
    </section>
  )
}