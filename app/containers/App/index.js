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

export default function App() {
  return (
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.
    <div>
      <Machine title="café" isActive="no"/>
      <Machine title="cappucino" isActive="yes"/>
      <Machine title="machiatto" isActive="no"/>
    </div>
  );
}
