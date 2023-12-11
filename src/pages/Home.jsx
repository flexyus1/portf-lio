import Header from "../components/Header";
import Github from "../images/iconGithub.svg"
import Linkedin from "../images/iconLinkedin.svg"
import Fundo from "../images/fundo.jpg"

export default function Home() {
  return(
  <section>
    <Header />
    <main className="principal">
      <div className="socialMidia">
        <h1>Olá, Me Chamo <span>Leonildo Camilo</span></h1>
        <h2>Seja Muito Bem Vindo ao Meu Portfólio</h2>
        <button className="btn-social"><a href="https://github.com/flexyus1" target="_blank"><img src={Github} alt="" /></a></button>
        <button className="btn-social"><a href="https://www.linkedin.com/in/leonildo-camilo-78267b226/" target="_blank"><img src={Linkedin} alt="" /></a></button>
        
        
      </div>
      <div className="projects">
        <h1 className="h1Projects">Projetos</h1>
        <div className="projectsCard">
          <div className="cardProject">
            <button className="card"><a href="">  <img src={Fundo} className="cardImage" alt="" /> </a></button>
            <p className="tec">EM BREVE</p>
          </div>
          <div className="cardProject">
            <button className="card"><a href="">  <img src={Fundo} className="cardImage" alt="" /> </a></button>
            <p className="tec">EM BREVE</p>
          </div>
          <div className="cardProject">
            <button className="card"><a href="">  <img src={Fundo} className="cardImage" alt="" /> </a></button>
            <p className="tec">EM BREVE</p>
          </div>
        </div>
      </div>
    </main>

  </section>)
}