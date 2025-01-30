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
        id :'5',
        title : "Dating App",
        cover : libmain,
        description: "Projet réalisé pour un client, ayant comme but d'avoir un site de rencontre CSP+ avec un système de recherche et validation des profils, un système de paiement et une messagerie fonctionnelle",
        competences : ['Symfony', 'Anguar', 'Api-platform', 'mysql', 'mercure', 'stripe'],
        problems: 'Gestion des controlleurs appartenatns aux routes resolu avec le propriété de resonses et requete',
        link:'https://github.com/DonkeySchool/datingApp'
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
        description : "Site créé avec ReactJs contenant aussi des animations et l'utilisation du CSS pour le style, le site donne la possibilité au privé de voir et de louer des appartements",
        competences :['Reactjs', 'Hooks', 'SCSS', 'Animations', 'NodeJs'],
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
        description: "Site appartenant à une bibliothèque 'Mon vieux grimoire' réalisé de côté  backend en JavaScript, en partant dans le frontend  réalisé en Reactjs",
        competences : ['NodeJS', 'sqlite', 'sequelize', 'multer', 'ReactJs'],
        problems: 'Gestion des controlleurs appartenatns aux routes resolu avec le propriété de resonses et requete',
        link:'https://github.com/Manadev5/Projet-architecte.git'
    },
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
        description: 'Site créé en HTML5 et CSS3 représentant une agence de voyages, on peut voir les hébergements disponibles à Marseille avec leur notation et la popularité',
        competences : [ 'HTML5', 'figma', 'responsive design', 'CSS3'],
        problems: 'disposition et mise en place dans la section des cartes resolu avec display gird et flex',
        link:'https://github.com/Manadev5/Projet-booki.git'
    },
    {
        id :'2',
        title : 'Portfolio architecte Sophie Bluel',
        cover : Sophscreen,
        images : [
              Sophmain,
              Sophlogin,
              Sophedition,
              Sophmodale
        ],
        description: 'Site réalisé en HTML5, CSS3 et JavaScript pour une architecte (Sophie Bluel) montrant ses œuvres. En plus, il y a une page utilisateur où la propreté du site doit modifier les images présentes sur le site',
        competences : ['requetes HTTP', 'api-swagger', 'JavaScript', 'NodeJs'],
        problems: 'creation de la modale et la dynamicité su site resolu avec addEventListener  ',
        link:'https://github.com/Manadev5/Projet-architecte.git'

    }
    
]

