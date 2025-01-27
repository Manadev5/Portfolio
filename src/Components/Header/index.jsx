import { HashLink as Link } from 'react-router-hash-link';
import logoMe from '../../Assets/real-logo.png';
import '../Style/Home.css'

function header(){
    return(
     <nav>
      <img src={logoMe} alt="me-logo"/>
      <ul>
        <li><Link to= "/Portfolio#Accueil">Accueil</Link></li>
        <li><Link to="/Portfolio#A-propos">À Propos</Link></li>
        <li><Link to="/Portfolio#section-competences">Compétences</Link></li>
        <li><Link to="/Portfolio#projets">Projets</Link></li>
        <li><Link to="/Portfolio#contacts">contact</Link></li>
      </ul>
    </nav>
    )
}

export default header 