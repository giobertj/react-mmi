/**
 *
 * App.js
 *
 */
import React from 'react';
import GoogleMapReact from 'google-map-react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import AddMachine from '../../components/AddMachine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import '../../css/styles.css';
// On peut aussi importer du CSS de la meme facon.
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleStatusChange = this.handleStatusChange.bind(this);

    this.state = {
      center: {
        lat: 48.8566,
        lng: 2.3522
      },
      zoom: 11,
      machines: [
        {
          id: 0,
          name: "Machine à café",
          isActive: true
        },
        {
          id: 1,
          name: "Machine à thé",
          isActive: false
        },
        {
          id: 2,
          name: "Machine à frappucino",
          isActive: true
        },
        {
          id: 3,
          name: "Machine à citron",
          isActive: true
        }
      ]
    };
  }

  // Méthode pour inverser le status d'une machine
  handleStatusChange(key) {
    // 1. On copie le state existant
    const machines = { ...this.state.machines };
    // 2. On modifie le status de CETTE machine
    machines[key].isActive = !machines[key].isActive;
    // Pour vérifier la nouvelle collection dans la console :
    console.log(machines[key]);

    // 3. On applique cette nouvelle collection au state
    this.setState({ machines });
  }
  
  // Méthode ajout machine au formulaire
  addMachineToState(machine) {
    machine.preventDefault();
    console.log("addMachineToState");
    console.log(machine);
  }

  render() {
    return (
      <div className="main">
        <Header/>
        <AddMachine addMachineToState={this.addMachineToState
        }/>
          {/*Conteneur de notre liste*/}
          <div className="machines-list">
            {/*Boucle sur notre collection de machines*/}
            {
              Object
                .keys(this.state.machines)
                .map(key =>
                // Le composant Machine s'affichera autant de fois
                // qu'il y a d'objets dans la collection.
                <Machine name={this.state.machines[key].name}
                         key={this.state.machines[key].id}
                         index={this.state.machines[key].id}
                         handleStatusChange={this.handleStatusChange}
                         isActive={this.state.machines[key].isActive}/>
            )}
            <div className="map-container">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBU_IEeDtk0fIKfm18yj8bD6DDaJ0N-3e4" }}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
              >
                <AnyReactComponent
                  lat={this.state.center.lat}
                  lng={this.state.center.lng}
                />
              </GoogleMapReact>
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;


// Si tu enlève la ligne 7 et le la div de la ligne 86 à 97 tout fonctionne (mais on en a besoin pour la carte maps sauf que jsp comment ca fonctionne et jsp pourquoi ca fait buguer). Tout est à jour et notament le README avec les petites croix, pour l'ajout de machine via le formulaire j'ai commencé un truc qu'il faut utiliser c'est AddMachine, il me manque juste le bouton Ajouter et le lien.  