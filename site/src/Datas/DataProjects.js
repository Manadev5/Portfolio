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
        title : 'Booki : Agence des voyages',
        cover : bookimain,
        images : [
              bookicenter,
              bookifooetr,
              bookiheader
        ]
    },
    {
        id :'2',
        title : 'Potfolio architecte Sophie Bluel',
        cover : Sophmain,
        images : [
              Sophscreen,
              Sophlogin,
              Sophedition,
              Sophmodale
        ]

    },
    {
        id:'3',
        title : "Kasa : location d'appartements",
        cover : kasamain,
        images : [
              kasaccueil,
              kasaccueil1,
              kasapropos,
              kasalogement
        ]

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
        ]
    }
]

