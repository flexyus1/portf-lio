import Header from "../components/Header";
import IconJs from "../images/js.svg"
import IconCss from "../images/css.svg"
import IconHtml from "../images/html.svg"
import IconReact from "../images/react.svg"
import IconSass from "../images/sass.svg"




export default function About() {
  return(
    <section>
    <Header />
    <main className="about">
    <div className="container-about">
    <h1 className="title">Sobre Mim</h1>
    <p className="text">Olá novamente, Me chamo Leonildo Camilo, tenho 21 anos e conheci a programação através de amigos e jogos,
      sempre fui fascinado para saber como as coisas funcionavam, e com programação eu mesmo posso fazer isso, e isso sempre me motiva
      a continuar estudando e procurando novos conhecimentos e maneiras de fazer as coisas. <br />
      Atualmente tenho o sonho de poder ingressar no mercado de programação, e aqui mostro meus conhecimentos 
      na programação 
    </p>
    </div>
    <div className="tecnologies">
      <h1 className="titleT">Conhecimentos</h1>
        <div className="container">
          <div className="image">
            <img src={IconHtml} className="icon" alt="" />
            <p className="tec">HTML</p>
          </div>
          <div className="image">
            <img src={IconCss} className="icon" alt="" />
            <p className="tec">CSS</p>
          </div>
          <div className="image">
            <img src={IconSass} className="icon" alt="" />
            <p className="tec">SASS</p>
          </div>
          <div className="image">
            <img src={IconJs} className="icon" alt="" />
            <p className="tec">JAVASCRIPT</p>
          </div>
          <div className="image">
            <img src={IconReact} className="icon" alt="" />
            <p className="tec">REACT</p>
          </div>
        </div>

    </div>

    </main>
    
  </section>)
}