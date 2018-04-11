## Commandes

1. D'aborder, installer les dépendances avec `npm install`
2. Lancer `npm start` pour voir l'app à `http://localhost:3000`.

# Découverte de React.js
### Modalités 
Travail par groupes de 2, production individuelle.

### Objectif 
- Mettre en place un environnement de dev pour React.js
- Découvrir React.js avec des fonctionnalités simples 
- Créer une première app avec des composants qui communiquent entre eux.

### Consignes
- Lancez le serveur et ouvrez les fichiers app/containers/App/index.js et app/components/Machine.js
- Affichez le composant Machine plusieurs fois dans la page. 
- Affichez des données dynamiques dans le composant Machine en lui passant du texte via des Props depuis App/index.js
- Créez un composant Header, et un composant Footer.

# Développement de l'application
### Modalités 
Travail par groupes de 2, production individuelle.

### Objectif 
- Utiliser Git en situation
- Découvrir et utiliser le state de React.js
- Écouter des évènements et les lier à des méthodes.
- Ajouter un composant externe dans le projet

## Consignes

### Gérer son code avec Git
- [x] Suivre le tuto :
https://docs.google.com/document/d/1uQuQNz9Dj4QouTHlxnpFPNZvizns5TTzpcWtkAjf-d8/edit

### Lister nos machines depuis le state
- [x] Convertir la fonction App en classe.
- [x] Renseigner un state et y rajouter notre donnée : nom des machines et leur état
- [x] Afficher la liste des machines en appellant le state
- [x] Boucler sur cette donnée pour afficher la liste.
https://reactjs.org/docs/state-and-lifecycle.html

### Event : écouter le clic sur un bouton
- [x] Ajouter un bouton par Machine pour l'activer / désactiver
- [x] Écouter l'évènement clic sur ce bouton. Au clic sur ce bouton, lancer une fonction, définie dans ce même composant. https://reactjs.org/docs/handling-events.html

### Event : appliquer une faire remonter un fonction au composant parent
Pour profiter partout de la modification créée par cette action, on veut aller modifier le state du composant parent. Pour cela :
- [x] Définir un fonction dans le composant parent
- [x] Passer cette fonction en props au composant
- [x] Appeler cette fonction dans le composant au moment du clic
- [x] Faire inverser l'état actif / inactif d'une machine, grâce à un identifiant de la machine à modifier qu'on aura récupéré.
https://reactjs.org/docs/lifting-state-up.html
https://reactjs.org/docs/faq-functions.html

### Utiliser un composant externe
- [x] Charger un composant externe avec npm : un toggle : https://www.npmjs.com/package/react-toggle
Ce composant s'ajoute en ligne de commande au projet, puis s'importe comme on importe nos propre composants.
- [x] Remplacer le bouton activer / désactiver par ce composant.

### Ajouter une machine grâce à un formulaire
- [ ] En haut de la liste, ajouter un formulaire pour créer une machine avec : un nom ( input text ), un status ( select ), et un bouton 'Ajouter'. 
- [ ] Lier le formulaire à une fonction qui rajoutera une machine au state de l'application.

### Afficher des compteurs 
- [ ] Afficher le nombre total de machines en bas de la liste.
- [ ] Afficher le nombre de machines active et le nombre total de machines dans le composant Header.

### Naviguer sur une page produit
On a besoin de voir le détail de la machine, et donc d'avoir une page propre à chaque machine. 
- [ ] Router : utiliser React Router pour naviguer sur différentes pages :
https://github.com/ReactTraining/react-router

### Localiser les machines
- [ ] Renseigner pour chaque machine des coordonées dans le state ( lat et lng )
- [ ] Ajouter une carte Google Maps sur la page produit : https://github.com/google-map-react/google-map-react
Pour communiquer avec les APIs de Google, on a besoin d'une clé API. Vous pouvez utiliser celle ci : `AIzaSyBU_IEeDtk0fIKfm18yj8bD6DDaJ0N-3e4`

----------

## Documentation
- [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
- [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.

## License

This project is licensed under the MIT license, Copyright (c) 2017 Maximilian
Stoiber. For more information see `LICENSE.md`.
