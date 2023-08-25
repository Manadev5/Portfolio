import bookimain from '../Assets/screens-booki/Screen-booki.png';
import bookicenter from '../Assets/screens-booki/center-booki.png';
import bookifooetr from '../Assets/screens-booki/Footer-booki.png';
import bookiheader from '../Assets/screens-booki/header-booki.png';

import Sophmain from '../Assets/screen-sophie/principal-screen.png';
import Sophscreen from '../Assets/screen-sophie/Screen-sophie.png';
import Sophlogin from '../Assets/screen-sophie/login-screen.png';
import Sophedition from '../Assets/screen-sophie/edition-screen.png';
import Sophmodale from '../Assets/screen-sophie/modale-screen.png';

import kasamain from '../Assets/screen-kasa/main-kasa.png';
import kasaccueil from '../Assets/screen-kasa/accuueil-1.png';
import kasaccueil1 from '../Assets/screen-kasa/accueil-2.png';
import kasapropos from '../Assets/screen-kasa/a-propos.png';
import kasalogement from '../Assets/screen-kasa/fiche-logement.png';


import libmain from '../Assets/screen-librarie/principal-lib-screen.png';
import liblogin from '../Assets/screen-librarie/connexion.png';
import libcreate from '../Assets/screen-librarie/creation.png';
import liblivre from '../Assets/screen-librarie/livre.png';

export const Datas  = [
    {
        id: '1',
        title : 'Site Booki : Agence des voyages',
        cover : bookimain,
        images : [
            bookimain,
              bookicenter,
              bookifooetr,
              bookiheader
        ],
        description: 'Site créé en HTML5 et CSS3 rappresentant une agence des voyages, on peut voir les hebergément disponible à marseille avec leur notation et la popolarité',
        competences : [ 'HTML5', 'figma', 'responsive design', 'CSS3'],
        problems: 'disposition et mise en place dans la section des cartes resolu avec display gird et flex',
        link:'https://github.com/Manadev5/Projet-booki.git'
    },
    {
        id :'2',
        title : 'Potfolio architecte Sophie Bluel',
        cover : Sophscreen,
        images : [
              Sophscreen,
              Sophlogin,
              Sophedition,
              Sophmodale
        ],
        description: 'Site realisé en HTML5, CSS3 et JavaScript pour une architcte (Sophie bluel) montrant ces ouvres en plus il y a une page utilisateur où la propretere du site eut odifier les images present sur le site',
        competences : ['fetch','requetes HTTP', 'swagger'],
        problems: 'creation de la modale et la dynamicité su site resolu avec addEventListener  ',
        link:'https://github.com/Manadev5/Projet-architecte.git'

    },
    {
        id:'3',
        title : "Site Kasa : location d'appartements",
        cover : kasamain,
        images : [
              kasaccueil,
              kasaccueil1,
              kasapropos,
              kasalogement
        ],
        description : "Site créé avec React.js contenant aussi de animations et l'utilisation du scss pour le style, le site donne la posibilité au privé de voir et de louér des appartements",
        competences :['React.js', 'Hooks', 'SCSS', 'Animations'],
        problems:'Gestion des composants avec les pages dsu site resolu avec les props et avec les state',
        link:'https://github.com/Manadev5/Projet-Kasa.git'

    },
    {
        id :'4',
        title : "Site librarie : 'Mon vieux grimore'",
        cover : libmain,
        images : [
            libmain,
             liblogin,
             libcreate,
             liblivre
        ],
        description: "Site appartenant à une bibliothéque 'Mon vieux grimore' réalisé de coté  backend en JavaScript, en partant dans le frontend  réalisé en React.js",
        competences : ['Node JS', 'sqlite', 'sequelize', 'multer'],
        problems: 'Gestion des controlleurs appartenatns aux routes resolu avec le propriété de resonses et requete',
        link:'https://github.com/Manadev5/Projet-architecte.git'
    },
]

