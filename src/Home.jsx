import Header from "./Components/Header";
import Competences from "./Components/Competences";
import APropos from "./Components/A-propos";
import Projets from './Components/Projets';
import {Datas} from './Datas/DataProjects';
import Contact  from './Components/Contact';
import me from './Assets/me.png';
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
          <h1>Développeur web fullstack</h1>
          <img src={me} alt="pc-logo"/>
        </div>

      </section>
    <APropos />
      
    <Competences />
    

      <section id="projets">

        <h2>Mes Projets</h2>

        <div className='images'>
        
        
          <Projets

              Datas ={Datas}
      
          />
      
        </div>

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
