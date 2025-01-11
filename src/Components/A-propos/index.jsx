import logoComputer from '../../Assets/seo-2017000_640.png';

function aPropos() {

return(

<section id="A-propos">

<h2 className='titre-2'> À propos de moi </h2>

<img src={logoComputer} alt="pc-logo"/>

  <p>Passionné par la tech après le Bac j'ai voulu expérimenter quelque chose de nouveau dans ma vie.
    C'est en m'informant que j'ai connu le développement web, en voyant les lignes de code qui 
    compose une page web j'étais très fascine, même si je n'y comprenais rien du tout.
    Grâce aux formations que j'ai suivi j'ai pu apprendre le <strong>HTML5</strong>, <strong>CSS3</strong>, 
     <strong>Javascript</strong> et des frameworks comme <strong>React.js</strong> et <strong>Angular</strong> du coté fron-tend. 
    Du coté back-end j'ai appris le langage <strong>PHP</strong> avec son framework <strong>Symfony</strong>
    et <strong>Node.js</strong> avec <strong>Express.js</strong>
    je souhaite désormais travailler dans le développement web afin d'enrichir mes connaissances 
    et compétences et gagner de l'expérience dans ce domaine.

     </p>

</section>

)

}

export default aPropos;