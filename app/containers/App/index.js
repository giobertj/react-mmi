/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
// On peut aussi importer du CSS de la meme facon.
import css from '../../css/style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: [
        {
          key: 0,
          name: "Machine 1 définie dans le state",
          isActive: true
        },
        {
          key: 1,
          name: "Machine 2 définie dans le state",
          isActive: false
        },
        {
          key: 2,
          name: "Machine 3 définie dans le state",
          isActive: true
        }, 
      ]
    };
    
  console.log(this.state.machines);
  
  }
  
  render() {
    return (
      <div>
        <header/>
        //appel avec une boucle
        {
          this.state.machines.map(machine =>
            //console.log(machine.name)
            <Machine  name={machine.name}
                      key={machine.key}
                      isActive={machine.isActive}/>
          )
        }
        //appel manuel
          <Machine name={this.state.machines[0].name} 
              isActive={this.state.machines[0].isActive}/>
          <Machine name={this.state.machines[1].name} 
                isActive={this.state.machines[1].isActive}/>
          <Machine name={this.state.machines[2].name} 
               isActive={this.state.machines[2].isActive}/>
        
        <footer/>
      </div>
    )
  }
}

export default App;