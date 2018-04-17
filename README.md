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

### Event : faire remonter un changement de state au composant parent
Pour profiter partout de la modification créée par cette action, on veut aller modifier le state du composant parent. Pour cela :
- [x] Créer une fonction de modification du state dans le composant parent
- [x] Passer cette fonction en props au composant
- [x] Appeler cette fonction dans le composant au clic
- [x] Faire inverser l'état actif / inactif d'une machine, grâce à un identifiant de la machine à modifier qu'on aura récupéré.
- [x] Afficher un texte adapté dans le bouton : "Activer" si la machine est inactive, "Désactiver" si la machine est active.
https://reactjs.org/docs/lifting-state-up.html
https://reactjs.org/docs/faq-functions.html

### Utiliser un composant externe
Notre bouton fonctionne, on peut maintenant travailler la forme. Étant donné qu'il sert à activer ou désactiver, c'est un bon cas d'utilisation d'un toggle. On peut utiliser un toggle existant sous forme de composant externe.
- [x] Charger un composant externe avec npm : un toggle : https://www.npmjs.com/package/react-toggle
Ce composant s'ajoute en ligne de commande au projet, puis s'importe comme on importe nos propre composants. Voir la doc http://aaronshaf.github.io/react-toggle/.
- [x] Câbler la fonction de modification du state à l'évènement du composant toggle. 
- [x] Remplacer le bouton activer/désactiver par ce composant.

### 🚨 Afficher des compteurs 
On veut afficher le nombre de machines actives et le total pour avoir une meilleure vision d'ensemble de la liste.
- [x] Calculer et afficher le nombre de machines active et le nombre total de machines dans App. Voir https://github.com/Romainpetit/react-mmi/commit/c3f932454321ffd281bd49c67a0938086347e42e
- [ ] Afficher le nombre total de machines en bas de la liste.
- [ ] Afficher le nombre de machines active et le nombre total de machines dans le composant Header.

Le rendu final doit ressembler à ça : ![image](https://user-images.githubusercontent.com/632197/38746865-1eca827c-3f49-11e8-9ad9-10fec9f7ae11.png)


### 🚨 Ajouter une machine grâce à un formulaire
- [x] En haut de la liste, ajouter un formulaire pour créer une machine avec : un nom ( input text ), un status ( select ), et un bouton 'Ajouter'.
- [ ] À l'envoi du formulaire, appeler la fonction `addMachineToState()` qui sera définie dans App.
- [ ] Écrire la fonction `addMachineToState()` qui rajoutera une machine au state de l'application : comme `handleStatusChange()` elle modifiera une copie du state pour ensuite l'appliquer avec `setState()`.
- [ ] Faire que la fonction `addMachineToState` ajoute également un `id` unique à chaque nouvelle machine.

### 🚨 Supprimer une machine avec un bouton
De la même façon que pour le formulaire d'ajout, un bouton "supprimer" permettra de supprimer une machine de la liste. 
- [ ] À chaque machine rajouter un bouton 'Supprimer'.
- [ ] Au clic sur ce bouton, appeler une fonction qui supprimera cette machine du state de l'application. On peut ici passer l'id de la machine cliquée pour identifier la machine à supprimer, comme on le fait avec `handleStatusChange`. 

Le résultat doit ressembler à ça : 
![image](https://user-images.githubusercontent.com/632197/38748365-21b63ed6-3f4e-11e8-9284-13ab24fda817.png)

### 🚨 Naviguer sur une page produit
On a besoin de voir le détail de la machine, et donc d'avoir une page propre à chaque machine. Un routeur nous permet d'afficher du contenu différent en fonction de l'url visitée.
- [ ] Router : utiliser React Router pour naviguer sur différentes pages :
https://github.com/ReactTraining/react-router
- [ ] À la racine du site, http://localhost:3000/, afficher l'app complète
- [ ] À l'addresse http://localhost:3000/machine/<id> afficher le détail de la machine. http://localhost:3000/machine/1 affichera donc le détail de la machine qui a pour `id` 1.
- [ ] Rajouter un lien sur chaque machine de la liste vers sa page détail.

### 🚨 Localiser les machines (bonus)
Notre application liste des machines du monde entier. Sur la page de détail d'une machine, on veut pouvoir voir sur une carte sa localisation.
- [ ] Renseigner pour chaque machine des coordonées dans le state ( lat et lng )
- [ ] Ajouter une carte Google Maps sur la page de détail. Pour cela, utiliser ce composant externe : https://github.com/google-map-react/google-map-react
- [ ] Ajouter un marqueur sur la carte pour présenter la position exacte de la machine.
Pour communiquer avec les APIs de Google, on a besoin d'une clé API. Pour cet exercice, vous pouvez utiliser celle ci : `AIzaSyBU_IEeDtk0fIKfm18yj8bD6DDaJ0N-3e4`

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