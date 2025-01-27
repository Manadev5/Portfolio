import Header from "./Components/Header";
import Competences from "./Components/Competences";
import APropos from "./Components/A-propos";
import Projets from './Components/Projets';
import {Datas} from './Datas/DataProjects';
import Contact  from './Components/Contact';
import github from './Assets/git-hub.png';
import linkedin from './Assets/linkedin.png';
import './Components/Style/Home.css';





function HomePage() {

  return (
  <body> 
    <header>
        <Header/>
    </header>
    <main >
      <section id="Accueil">

        <div className="text-block">
          <h1> Manassé Mukenge</h1>
          <h1 className="title-dev">Développeur web fullstack</h1>
          <p> à la recherche d'un CDI sur Paris et le Val d'oise</p>
        </div>

        <div className="icons">

        <div  className='github'>
            <a href ='https://github.com/Manadev5/' target="_blank" rel="noopener noreferrer">
            <img src = {github} alt= 'github'/>
            </a>
          </div>

          <div className='linkedin'>
            <a href ='https://www.linkedin.com/in/manass%C3%A8-mukenge-29b5a6235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6PGtiCbdTUyhIYzi33SWjg%3D%3D' target="_blank" rel="noopener noreferrer">
            <img src = {linkedin} alt= 'linkedin'/>
            </a>
          </div>

        </div>



      </section>
      <APropos />
      
      <Competences />
    

      <section id="projets">

        <h2>Mes Projets</h2>   
        
          <Projets

              Datas ={Datas}
      
          />

      </section>

      <footer>

      <h2>Me contacter</h2>

        <Contact />

      </footer>

    
    </main>
  </body> 
  )
}

export default HomePage;
