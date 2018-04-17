/**
 *
 * Machine.js
 *
 */
import React from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css" // for ES6 modules

class Machine extends React.Component {
  // Méthode lancée au clic sur le bouton "Toggle"
  onToggleClick() {
    // On envoie l'index à la méthode qui changera la valeur
    // La méthode et son argument sont tous les deux accessibles
    // via des props qui ont été passées au composant
    this.props.handleStatusChange(this.props.index);
  }

  render() {
    return (
        <div
        className= { this.props.isActive ? "machine active" : "machine" }> {/* Si isActive passée en props est à true, ajouter la classe "active" */}
          {this.props.name}
          {/* On appelle onToggleClick avec (e) pour pouvoir accéder à this*/}
          <Toggle
              checked={this.props.isActive}
              onChange={(e) => this.onToggleClick(e)}
          />
        </div>
      )
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;