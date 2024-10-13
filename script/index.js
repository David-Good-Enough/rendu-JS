const coursesData = [
    {
      name: 'Créer un SPA en Vanilla JS',
      description:
        "Dans ce cours de création de Single Page Applications (SPA) en Vanilla JavaScript d'une durée de 4 heures, les participants peuvent acquérir une introduction rapide mais instructive aux concepts essentiels du développement d'applications web avancées. Au cours de cette brève formation, les étudiants apprendront à maîtriser les principes de base du JavaScript, y compris la manipulation du Document Object Model (DOM), la gestion des événements, et l'exécution de requêtes HTTP. Cette base solide en JavaScript est cruciale pour la création de SPAs, qui sont des applications web interactives qui offrent une expérience utilisateur fluide sans rechargement de la page.\nPendant le cours, les étudiants se familiariseront avec la structure et la conception d'une SPA en Vanilla JavaScript. Ils apprendront à gérer la navigation, à mettre en place des vues dynamiques, et à manipuler l'état de l'application de manière efficace. Bien que le temps soit limité à 4 heures, les participants auront l'occasion d'explorer les principaux concepts qui sous-tendent les SPAs, tels que le routage, la gestion de l'état côté client, et la communication avec des API externes.\nEn fin de compte, ce cours intensif de création de SPA en Vanilla JavaScript fournira aux étudiants une première exposition aux concepts clés nécessaires pour commencer à développer des SPAs. Cependant, étant donné la durée limitée, il s'agira d'une introduction de base, et les apprenants devront continuer à approfondir leurs connaissances et leurs compétences par la pratique et l'apprentissage continu pour maîtriser pleinement le développement de SPAs plus complexes et sophistiquées.",
    },
    {
      name: 'Apprendre React',
      description:
        "Dans ce cours de React destiné aux débutants, les étudiants acquièrent une solide compréhension des fondamentaux de cette bibliothèque JavaScript largement utilisée pour la création d'interfaces utilisateur interactives. Au cours de ce programme, les participants apprennent d'abord les concepts de base de React, tels que les composants, les propriétés (props), et l'état (state). Ils découvrent comment structurer leur code de manière modulaire en divisant leur application en composants réutilisables, favorisant ainsi la maintenabilité et l'extensibilité du code.\nAu fur et à mesure de leur progression, les apprenants sont initiés à la gestion de l'état des composants et à la communication entre ces derniers. Ils explorent également les avantages de l'utilisation de JSX, une extension de JavaScript qui permet de déclarer les interfaces utilisateur de manière déclarative et intuitive. Les étudiants apprennent à manipuler des événements, à gérer les formulaires, et à effectuer des requêtes HTTP pour interagir avec des API externes. Grâce à des exemples pratiques et des projets guidés, les débutants sont rapidement capables de développer des applications web interactives, jetant ainsi les bases pour leur progression dans le monde du développement front-end.\nEnfin, le cours de React pour débutants aborde les principes de la réactivité et de la mise à jour des composants, en mettant en lumière les notions avancées telles que le cycle de vie des composants et les hooks. Les apprenants découvrent comment gérer les données dynamiques de manière efficace, ce qui leur permet de créer des applications plus complexes et interactives. Ils sont également exposés aux meilleures pratiques de développement, à la gestion des erreurs, et à l'optimisation des performances, ce qui les prépare à devenir des développeurs React compétents et confiants dans la création d'applications web modernes et réactives.",
    },
    {
      name: 'Apprendre Angular',
      description:
        "Dans ce cours d'Angular destiné aux débutants, les étudiants se familiarisent avec ce puissant framework JavaScript développé par Google, qui est largement utilisé pour la création d'applications web modernes. Le cours commence par une introduction aux concepts clés d'Angular, notamment les composants, les modules, et les directives. Les apprenants découvrent comment structurer une application Angular de manière modulaire et apprennent à créer des composants réutilisables qui forment l'ossature de l'application. Ils explorent également le système de gestion de l'état et de la navigation d'Angular, ainsi que les fondamentaux de la liaison de données bidirectionnelle.\nAu fur et à mesure de leur progression, les étudiants se plongent dans les fonctionnalités avancées d'Angular, telles que la gestion des formulaires, la communication avec des services externes via des appels HTTP, et la mise en place de routage pour la navigation à l'intérieur de l'application. Les débutants apprennent à utiliser le système de dépendances d'Angular pour l'injection de dépendances, ce qui favorise la réutilisation du code et la facilité de test. Ils explorent également les aspects de la sécurité, l'authentification, et l'autorisation dans le contexte d'une application Angular, préparant ainsi les apprenants à développer des applications web sécurisées et robustes.\nEnfin, le cours d'Angular pour débutants met l'accent sur les meilleures pratiques de développement, les techniques de débogage, l'optimisation des performances, et l'accessibilité, ce qui permet aux étudiants de créer des applications web professionnelles et hautement performantes. En acquérant une compréhension approfondie d'Angular, les débutants sont prêts à se lancer dans le monde du développement front-end et à contribuer de manière significative à la création d'applications web modernes et réactives.",
    },
  ]

  // Function to create elements
const createElement = (elementName, attributes, childrenArray) => {
  const element = document.createElement(elementName);
  attributes && Object.entries(attributes).forEach(([key, value]) => { element[key] = value });
  childrenArray?.forEach(child => element.appendChild(child));
  return element;
};


const showCourseDetails = (course) => {

  body.innerHTML = '';


  const header = createElement('header', { className: "header"}, [image]);
  const backButton = createElement('p', { innerText: "< Retout à la liste", className: "bouton-retour" });
  const courseTitle = createElement('h2', { className: "h2_details", innerText: course.name });
  const courseDescription = createElement('p', { className: "p_details", innerText: course.description });
  

  backButton.addEventListener('click', () => location.reload());


  body.append(header, backButton, courseTitle, courseDescription);
};


const loadCourseList = () => {
  const header = createElement('header', { className: "header"}, [image]);
  const h1 = createElement('h1', { className: "h1", innerText: "Les cours du module web avancé" });


  const courseList = coursesData.map((course, index) => {
    const courseName = createElement('h2', { className: "h2", innerText: course.name });
    const courseDesc = createElement('p', { className: "p", innerText: course.description });
    const detailsButton = createElement('button', { innerText: "Get details" });
    
    detailsButton.addEventListener('click', () => showCourseDetails(course));
    
    return createElement('ul', { className: "ul" }, [courseName, courseDesc, detailsButton]);
  });

  const div_block = createElement('div', { className: "div_block" }, courseList);
  body.append(header, h1, div_block);
};

const body = document.querySelector('body');
const image = createElement('img', { src: "../images/logo_ynov.webp", className: "image" });
image.addEventListener("click", (event) => location.reload());

loadCourseList();




