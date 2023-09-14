
import { CONTENT_TYPE } from './enum';
import Data from '../../assets/data.json';
import { ClassTemplate, Week } from './models';

// For Deploy
// https://github.com/angular-schule/angular-cli-ghpages
// ng deploy --base-href=/4W6/

export const CLASS_TEMPLATE: ClassTemplate = Data;
// export const WEEKS: Week[] = Data;
// [
// {
//   weeknumber: '01',
//   title: 'Introduction à Angular',
//   content: [
//     new Content('Utilisation de NPM'),
//     new Content('TypeScript'),
//     new Content('Introdution à Angular'),
//     new Content('Créer une application Angular'),
//     new Content('Créer un template et l\'ajouter dans à un composant Angular'),
//     new Content('Créer et utiliser un formulaire'),
//   ],
//   documents: [
//     new Document('https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html', 'Tutoriel TypeScript', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 1/Semaine 1 - Angular.pptx', 'PowerPoint - Semaine 1', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 1/Semaine 1 - Exercices.zip', 'Fichiers de départ des exercies', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 1/Semaine 1 - Solutions.zip', 'Solutions des exercies', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 1/Laboratoire - Solution.zip', 'Solution du laboratoire', CONTENT_TYPE.LINK),
//   ],
//   videos: [
//     new Document('16XngEZ7Phg', 'Créer son premier projet avec Angular', CONTENT_TYPE.VIDEO),
//     new Document('stULeYPnry8', 'Manipulations de base avec npm', CONTENT_TYPE.VIDEO),
//     new Document('mnrBdzHo5Jc', 'Débuter avec Angular', CONTENT_TYPE.VIDEO),
//     new Document('CRnas7Dz28Y', 'Utiliser VS Code et les breakpoints avec Angular', CONTENT_TYPE.VIDEO),
//     new Document('3MD6MXqBCm4', 'Utiliser des formulaires avec Angular', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('', 'Finir les exercices', CONTENT_TYPE.TEXT),
//     new Document('', 'Compléter le laboratoire', CONTENT_TYPE.TEXT),
//   ]

// },
// {
//   weeknumber: '02',
//   title: 'Services Web et requêtes http',
//   content: [
//     new Content('Introduction aux services webs'),
//     new Content('Utiliser un service web existant'),
//     new Content('Découper son code en plusieurs composants'),
//     new Content('Utiliser un service entre différents composants'),
//     new Content('Évènement clic et Affichage conditionnel -> ngIf et [class]'),
//   ],
//   documents: [
//     new Document('./assets/Semaine 2/Semaine 2 - Export - HTTP - ngIf.pptx', 'PowerPoint - Semaine 2', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 2/Exercice - Solution.zip', 'Solution de l\'exercice', CONTENT_TYPE.LINK),
//   ],
//   videos: [
//     new Document('lC7ar6tAYB4', 'Démo - Travail 1 - Version finale', CONTENT_TYPE.VIDEO),
//     new Document('S__ysqQeiBM', 'Faire une requête HTTP avec Angular', CONTENT_TYPE.VIDEO),
//     new Document('_P7gp9SuAxw', 'Créer et utiliser plusieurs componets', CONTENT_TYPE.VIDEO),
//     new Document('Rt_pPKdnk-M', 'Démo - Travail 1 - Phase 1', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('./assets/TP/Super Musique Infinie.docx', 'Super Musique Infinie', CONTENT_TYPE.LINK),
//     new Document('', 'Phase 1 du travail personnel', CONTENT_TYPE.TEXT),
//   ]
// },
// {
//   weeknumber: '03',
//   title: 'Navigation entre les composants et organisation efficace du code',
//   content: [
//     new Content('La phase 1 du travail personnel devrait être complétée', CONTENT_TYPE.ASSIGNMENT),
//     new Content('Utiliser un service entre différents composants'),
//     new Content('Comment travailler avec le type observable'),
//     new Content('Organiser les requêtes HTTP et le code avec des services'),
//     new Content('Routage -> Changer l\'URL, rediriger et récupérer les paramètres'),

//   ],
//   documents: [
//     new Document('./assets/Semaine 3/Semaine 3 - Service - Observable - Routage.pptx', 'PowerPoint - Semaine 3', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 3/Exercices - Depart.zip', 'Fichiers de départ pour l\'exercice', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 3/Exercices - Solutions.zip', 'Solutions des exercies', CONTENT_TYPE.LINK),
//   ],
//   videos: [
//     new Document('lC7ar6tAYB4', 'Démo - Travail 1 - Version finale', CONTENT_TYPE.VIDEO),
//     new Document('1kH6bHwUwZM', 'Créer un service pour partager des données', CONTENT_TYPE.VIDEO),
//     new Document('tRwveiHOhSs', 'Organisation du code pour les requêtes HTTP', CONTENT_TYPE.VIDEO),
//     new Document('uyVjojyu_3M', 'Configurer le routage', CONTENT_TYPE.VIDEO),
//     new Document('ytZwvghQqdQ', 'Démo - Phase 2', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('./assets/TP/Super Musique Infinie.docx', 'Super Musique Infinie', CONTENT_TYPE.LINK),
//     new Document('', 'Débuter la phase 2 du travail personnel', CONTENT_TYPE.TEXT),
//   ]
// },
// {
//   weeknumber: '04',
//   title: 'Stockage client, Spotify et gestion des requêtes asynchrones avec async - await',
//   content: [
//     new Content('Utiliser le localStorage pour stocker des informations sur le client'),
//     new Content('Passer à Spotify API'),
//     new Content('Ajouter async à une méthode'),
//     new Content('Utiliser await avec les requêtes HTTP'),
//   ],
//   documents: [
//     new Document('./assets/Semaine 4/Semaine 4 - LocalStorage - Async.pptx', 'PowerPoint - Semaine 4', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 4/Demo - Spotify.zip', 'Démo - Spotify API', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 4/Demo - Finale - Async.zip', 'Version finale de la démo pour async et await', CONTENT_TYPE.LINK),
//   ],
//   videos: [
//     new Document('lC7ar6tAYB4', 'Démo - Travail 1 - Version finale', CONTENT_TYPE.VIDEO),
//     new Document('U80kf5QeAF8', 'Utiliser le localStorage pour persister des données sur le client', CONTENT_TYPE.VIDEO),
//     new Document('J7Cz9lxgXWM', 'Utilser async et await pour des requêtes HTTP', CONTENT_TYPE.VIDEO),
//     new Document('ytZwvghQqdQ', 'Démo - Phase 2', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('./assets/TP/Super Musique Infinie.docx', 'Super Musique Infinie', CONTENT_TYPE.LINK),
//     new Document('', 'Terminer la phase 2 du travail personnel', CONTENT_TYPE.TEXT),
//   ]
// },
// {
//   weeknumber: '05',
//   title: 'Utilisation des modules',
//   content: [
//     new Content('Ajouter un module externe'),
//     new Content('Material Design'),
//     new Content('Créer son propre module'),
//   ],
//   documents: [
//     new Document('./assets/Semaine 5/Semaine 5 - Module - Material.pptx', 'PowerPoint - Semaine 5', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 5/Exercice - Depart.zip', 'Fichiers de départ pour l\'exercice', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 5/Exercice - Solution.zip', 'Solution de l\'exercice', CONTENT_TYPE.LINK),
//   ],
//   videos: [
//     new Document('lC7ar6tAYB4', 'Démo - Travail 1 - Version finale', CONTENT_TYPE.VIDEO),
//     new Document('1hKOpBU9mMc', 'Créer son propre module', CONTENT_TYPE.VIDEO),
//     new Document('BzAVmmb8Y6Y', 'Ajouter Material à un projet', CONTENT_TYPE.VIDEO),
//     new Document('TfRrEOsGNv4', 'Créer routing module', CONTENT_TYPE.VIDEO),
//     new Document('ytZwvghQqdQ', 'Démo - Phase 2', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('./assets/TP/Super Musique Infinie.docx', 'Super Musique Infinie', CONTENT_TYPE.LINK),
//     new Document('', 'Terminer la phase 2 du travail personnel', CONTENT_TYPE.TEXT),
//   ]
// },
// {
//   weeknumber: '06',
//   title: 'Utiliser des vidéos Youtube, Google Maps et traduire l\'application',
//   content: [
//     new Content('La phase 2 du travail personnel devrait être complétée', CONTENT_TYPE.ASSIGNMENT),
//     new Content('Ajouter une vidéo Youtube à project'),
//     new Content('Utiliser les Pipes pour transformer des données'),
//     new Content('Ajouter Angular Google Maps pour créer des maps'),
//     new Content('Ajouter NGX-Translate pour faire la traduction de l\'application'),

//   ],
//   documents: [
//     new Document('./assets/Semaine 6/Semaine 6 - Pipe - YouTube - i18n - Google Maps.pptx', 'PowerPoint - Semaine 6', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 6/Exercice - Depart.zip', 'Fichiers de départ pour l\'exercice', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 6/Exercice - Solution.zip', 'Solution de l\'exercice', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 6/demo-agm.zip', 'Google Maps - Exemple pour ajouter Angular Google Maps', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 6/demo-i18n.zip', 'i18n - Exemple pour la traduction', CONTENT_TYPE.LINK),
//   ],
//   videos: [
//     new Document('lC7ar6tAYB4', 'Démo - Travail 1 - Version finale', CONTENT_TYPE.VIDEO),
//     new Document('Yv5saunLRdQ', 'Ajouter une vidéo Youtube', CONTENT_TYPE.VIDEO),
//     new Document('5zibrXPzXW4', 'Utiliser un pipe pour filtrer un url', CONTENT_TYPE.VIDEO),
//     new Document('MFQW9dKiWHw', 'Ajouter Angular Google Maps à un projet', CONTENT_TYPE.VIDEO),
//     new Document('16Jjm-LDjq0', 'Utiliser NGX-Translate pour faire la traduction de l\'application', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('./assets/TP/Super Musique Infinie.docx', 'Super Musique Infinie', CONTENT_TYPE.LINK),
//     new Document('', 'Débuter la phase 3 du travail personnel', CONTENT_TYPE.TEXT),
//   ]
// },
// {
//   weeknumber: '07',
//   title: 'Examen 1',
//   content: [
//     new Content('Examen 1', CONTENT_TYPE.ASSIGNMENT),
//     new Content('Fait individuellement'),
//     new Content('Tous documents permis'),
//     new Content('Remise du travail personnel', CONTENT_TYPE.ASSIGNMENT)
//   ],
//   documents: [
//     new Document('', 'Tous documents permis lors de l\'examen', CONTENT_TYPE.TEXT),
//   ],
//   videos: [
//     new Document('lC7ar6tAYB4', 'Démo - Travail 1 - Version finale', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('', 'Compléter l\'examen durant la période de laboratoire', CONTENT_TYPE.TEXT),
//     new Document('./assets/TP/Super Musique Infinie.docx', 'Super Musique Infinie', CONTENT_TYPE.LINK),
//     new Document('', 'Compléter la phase 3 du travail personnel', CONTENT_TYPE.TEXT),
//   ]
// },
// {
//   weeknumber: '08',
//   title: 'Créer son API en .Net Core et le lier à une application Angular',
//   content: [
//     new Content('Créer un API de base avec Web API'),
//     new Content('Faire des requêtes à notre API'),
//     new Content('Scaffolding (génération automatique) de contrôleur, contexte et dépendances Nuget'),
//     new Content('Ajouter CORS à un projet Web API'),
//     new Content('Modifier les routes des actions et des contrôleurs'),
//   ],
//   documents: [
//     new Document('./assets/Semaine 8/Semaine 8 - Web API - CORS - Routage.pptx', 'PowerPoint - Semaine 8', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 8/Exercice - Solution.zip', 'Solution de l\'exerice', CONTENT_TYPE.LINK),
//   ],
//   videos: [
//     new Document('02ygAibPXbE', 'Démo - Phase 4', CONTENT_TYPE.VIDEO),
//     new Document('z4Kstux95ew', 'Créer son premier projet Web API et modifier les routes', CONTENT_TYPE.VIDEO),
//     new Document('BmCunNNZ9vQ', 'Utiliser Angular avec Web API et gérer des problèmes de CORS', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('./assets/TP/Super Musique Infinie - Phase 4.docx', 'Super Musique Infinie - Phase 4', CONTENT_TYPE.LINK),
//     new Document('', 'Débuter la phase 4 du travail personnel', CONTENT_TYPE.TEXT),
//   ]
// },
// {
//   weeknumber: '09',
//   title: 'Gestion des utilisateurs avec Identity en .Net Core Web API',
//   content: [
//     new Content('Ajouter Identity à un projet Web API'),
//     new Content('Enregistrer un nouvel utilisateur'),
//     new Content('Sécuriser un contrôleur'),
//     new Content('Créer un Token pour gérer les connexions'),
//     new Content('Récupérer et gérer un Token d\'authentification'),
//     new Content('Ajouter un Token à des requêtes Angular'),
//   ],
//   documents: [
//     new Document('./assets/Semaine 9/Semaine 9 - Authentification.pptx', 'PowerPoint - Semaine 9', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 9/DemoAPI - 1 de 3.zip', 'Exemple - Identity 1 de 3 - API avec l\'enregistrement d\'un utilisateur', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 9/DemoAPI - 2 de 3.zip', 'Exemple - Identity 2 de 3 - API avec l\'enregistrement et la connexion d\'un utilisateur', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 9/DemoAPI - 3 de 3.zip', 'Exemple - Identity 3 de 3 - API complet et utilisation de l\'authenfication de Web API avec Angular', CONTENT_TYPE.LINK),
//   ],
//   videos: [
//     new Document('02ygAibPXbE', 'Démo - Phase 4', CONTENT_TYPE.VIDEO),
//     new Document('08UfXZOauNc', 'Ajouter Identity et créer un utilisateur', CONTENT_TYPE.VIDEO),
//     new Document('H40aN8l7neg', 'Ajouter un token et connecter un utilisateur', CONTENT_TYPE.VIDEO),
//     new Document('8sxwMClqtuc', 'Utiliser Angular et l\'authentification de Web API', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('./assets/TP/Super Musique Infinie - Phase 4.docx', 'Super Musique Infinie - Phase 4', CONTENT_TYPE.LINK),
//     new Document('', 'Poursuivre la phase 4 du travail personnel', CONTENT_TYPE.TEXT),
//   ]
// },
// {
//   weeknumber: '10',
//   title: 'Gestion des requêtes HTTP à l\'aide d\'interceptor et utilisation des méthodes asynchrones',
//   content: [
//     new Content('Créer un interceptor'),
//     new Content('Modifier l\'entête HTTP dans un interceptor'),
//     new Content('Ajouter async à une méthode'),
//     new Content('Utiliser await avec les requêtes HTTP'),
//   ],
//   documents: [
//     new Document('./assets/Semaine 10/Semaine 10 - Interceptor.pptx', 'PowerPoint - Semaine 10', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 10/Demo - Spotify - Depart.zip', 'Fichiers de départ pour les démos', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 10/Demo - Finale - Interceptor.zip', 'Version finale de la démo pour l\'Interceptor', CONTENT_TYPE.LINK),
//   ],
//   videos: [
//     new Document('02ygAibPXbE', 'Démo - Phase 4', CONTENT_TYPE.VIDEO),
//     new Document('HJxxkiKRWK8', 'Utilser un Intepceptor pour ajouter un token automatiquement', CONTENT_TYPE.VIDEO),

//   ],
//   homework: [
//     new Document('./assets/TP/Super Musique Infinie - Phase 4.docx', 'Super Musique Infinie - Phase 4', CONTENT_TYPE.LINK),
//     new Document('', 'Terminer la phase 4 du travail personnel', CONTENT_TYPE.TEXT),
//   ]
// },
// {
//   weeknumber: '11',
//   title: 'Créer un serveur d\'images avec Web API en .net core',
//   content: [
//     new Content('Remise du travail personnel', CONTENT_TYPE.ASSIGNMENT),
//     new Content('Télécharger des images (Download)'),
//     new Content('Téléverser des images (Upload)'),
//     new Content('Fournir plusieurs tailles d\'images différentes'),
//     new Content('Lire le metadata des images'),
//   ],
//   documents: [
//     new Document('./assets/Semaine 11/Semaine 11 - Traitement images.pptx', 'PowerPoint - Semaine 11', CONTENT_TYPE.LINK),
//     new Document('./assets/Semaine 11/Demo - Serveur images.zip', 'Version finale de la démo', CONTENT_TYPE.LINK),
//   ],
//   videos: [
//     new Document('agohtZGh8DA', 'Démo - Projet final', CONTENT_TYPE.VIDEO),
//     new Document('N6VpVvVUHwY', 'Créer un serveur d\'images', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('./assets/TP/Jmepromeneavecmesvalises.docx', 'Projet final - Jmepromeneavecmesvalises.com', CONTENT_TYPE.LINK),
//     new Document('', 'Débuter le projet final', CONTENT_TYPE.TEXT),
//   ]
// },
// {
//   weeknumber: '12',
//   title: 'Inclure des libraire JS à Angular et faire un Seed avec des utilisateurs',
//   content: [
//     new Content('Ajouter une libraire JS'),
//     new Content('Utiliser des ViewChild et ViewChildren pour contrôler l\'affichage'),
//     new Content('Créer un utilisateur dans un seed d\'Entity Framework'),
//   ],
//   documents: [
//     new Document('./assets/Semaine 12/Semaine 12 - Seed.pptx', 'Faire un seed d\'utilisateurs', CONTENT_TYPE.LINK),
//     new Document('https://jmnadeau.github.io/4W6-JS-lib/', 'Inclure des fichiers JS avec exemples -> Sur Github', CONTENT_TYPE.LINK),
//   ],
//   videos: [
//     new Document('agohtZGh8DA', 'Démo - Projet final', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('./assets/TP/Jmepromeneavecmesvalises.docx', 'Projet final - Jmepromeneavecmesvalises.com', CONTENT_TYPE.LINK),
//     new Document('', 'Poursuivre le projet final', CONTENT_TYPE.TEXT),
//   ]
// },
// /* {
//   weeknumber: '13',
//   title: 'Ajouter une application Angular à un projet Web API',
//   content: [
//     new Content('Ajouter des fichiers static à Web API'),
//     new Content('Générer le projet angular directement dans Visual Studio'),
//     new Content('Démarrer les application Web API et Angular directement à partir de Visual Studio'),
//   ],
//   documents: [
//     new Document('', 'Document à venir', CONTENT_TYPE.TEXT),
//   ],
//   videos: [
//     new Document('agohtZGh8DA', 'Démo - Projet final', CONTENT_TYPE.VIDEO),
//     new Document('', 'Vidéo à venir', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('./assets/TP/Jmepromeneavecmesvalises.docx', 'Projet final - Jmepromeneavecmesvalises.com', CONTENT_TYPE.LINK),
//     new Document('', 'Poursuivre le projet final', CONTENT_TYPE.TEXT),
//   ]
// },
// {
//   weeknumber: '14',
//   title: 'Publier une application sur Azure',
//   content: [
//     new Content('Utiliser Azure App Service'),
//     new Content('Créer un projet sur Azure App Service'),
//     new Content('Publier les application Web API et Angular'),
//     new Content('Se préparer pour l\'examen', CONTENT_TYPE.ASSIGNMENT),
//   ],
//   documents: [
//     new Document('', 'Document à venir', CONTENT_TYPE.TEXT),
//   ],
//   videos: [
//     new Document('agohtZGh8DA', 'Démo - Projet final', CONTENT_TYPE.VIDEO),
//     new Document('', 'Vidéo à venir', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('./assets/TP/Jmepromeneavecmesvalises.docx', 'Projet final - Jmepromeneavecmesvalises.com', CONTENT_TYPE.LINK),
//     new Document('', 'Poursuivre le projet final', CONTENT_TYPE.TEXT),
//   ]
// }, */
// {
//   weeknumber: '13',
//   title: 'Intégration et révision',
//   content: [
//     new Content('Se préparer pour l\'examen', CONTENT_TYPE.ASSIGNMENT),
//   ],
//   documents: [
//     new Document('', 'Aucun document', CONTENT_TYPE.TEXT),
//   ],
//   videos: [
//     new Document('agohtZGh8DA', 'Démo - Projet final', CONTENT_TYPE.VIDEO),
//   ],
//   homework: [
//     new Document('./assets/TP/Jmepromeneavecmesvalises.docx', 'Projet final - Jmepromeneavecmesvalises.com', CONTENT_TYPE.LINK),
//     new Document('', 'Poursuivre le projet final', CONTENT_TYPE.TEXT),
//   ]
// },
// {
//   weeknumber: '14',
//   title: 'Examen 2',
//   content: [
//     new Content('Examen 2', CONTENT_TYPE.ASSIGNMENT),
//     new Content('Fait individuellement'),
//     new Content('Tous documents permis'),
//     new Content('Remise du projet final', CONTENT_TYPE.ASSIGNMENT)
//   ],
//   documents: [
//     new Document('', 'Tous documents permis', CONTENT_TYPE.TEXT),
//   ],
//   videos: [
//     new Document('', 'Aucune vidéo disponible', CONTENT_TYPE.TEXT),
//   ],
//   homework: [
//     new Document('', 'Compléter l\'examen durant la période', CONTENT_TYPE.TEXT),
//     new Document('', 'Profiter du congé!', CONTENT_TYPE.TEXT),
//   ]
// },
// ];
