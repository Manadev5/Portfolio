import { HashLink as Link } from 'react-router-hash-link'
import '../Style/Home.css'

function header(){
    return(
     <header>
      <ul>
      <li><Link to= "">Accueil</Link></li>
      <li><Link to="/Portfolio#A-propos">À Propos</Link></li>
      <li><Link to="/Portfolio#section-competences">Compétences</Link></li>
      <li><Link to="/Portfolio#projets">Projets</Link></li>
      <li><Link to="/Portfolio#contacts">contact</Link></li>
      </ul>
    </header>
    )
}

export default header 