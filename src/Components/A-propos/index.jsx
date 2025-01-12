import logoComputer from '../../Assets/logo-pc.png';

function aPropos() {

return(

<section id="A-propos">

  <img src={logoComputer} alt="pc-logo"/>

  <div class="blue-block">

    <h2 className='titre-2'> À propos de moi </h2>

    <p>
      La passion pour la création d'interfaces, d'outils capables de fournir des prestations utiles paur les
      autres et les nouvelles technologies sont les motivations qui m'ont poussent à enteprendrela carriere de 
      déveleppeur.
      Grâce aux formartions que j'ai integré pendant 4 ans  j'ai pu apprendre le langages: <strong>Javascript</strong>,  
      <strong>Typescypt</strong> du coté frontend et <strong>PHP</strong>, <strong>C#</strong>, 
      <strong>NodeJs</strong> du coté back-end. En tant que frameworks je metrise <strong>ReactJs</strong>, 
      <strong>Angular</strong> du coté fron-tend et du coté backend<strong>Symfony</strong>, <strong>.Net</strong>
      et <strong>ExpressJs</strong>. J'ai pu mettre mes compétences en pratique pendant un stage de 6 mois chez 
      Youzer une entreprise qui proposé une solution IAM, une application de rencontre CSP+ pour le fondateur de
      LesBigBoss et plusieurs projets disponibles sur mon profil github.   
      
    </p>
    
  </div>

</section>

)

}

export default aPropos;