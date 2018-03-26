/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return (
            <div className="Machine">
              <div className="Machine-header">
                <h2>{ this.props.title } / { this.props.isActive }</h2>
              </div>
              <p className="Machine 1">
                Machine à { this.props.title }
              </p>
              <div className="Machine-footer">
                <h3>Machine à café</h3>
              </div>
            </div>
          );
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;