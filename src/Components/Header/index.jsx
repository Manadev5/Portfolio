import { HashLink as Link } from 'react-router-hash-link'
import '../Style/Home.css'

function header(){
    return(
     <header>
      <ul>
      <li><Link to= "">Accueil</Link></li>
      <li><Link to="/#A-propos">À Propos</Link></li>
      <li><Link to="/#section-competences">Compétences</Link></li>
      <li><Link to="/#projets">Projets</Link></li>
      <li><Link to="/#contacts">contact</Link></li>
      </ul>
    </header>
    )
}

export default header 