import { Link } from "react-router-dom";

export default function Header (){
  return <header className="navegation">
            <nav>
              <Link to={"/"}className="nav-link">Inicio</Link> 
              <Link to={"/about"} className="nav-link">Sobre Mim</Link>
            </nav>
        </header>
}