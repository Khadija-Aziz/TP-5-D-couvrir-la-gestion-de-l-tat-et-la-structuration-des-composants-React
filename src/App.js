import { useState } from 'react';
import { ContextDUtilisateur } from './ContextDUtilisateur';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConver';
import Profil from './Profil';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Alice',
    connecte: true
  });

  return (
    <ContextDUtilisateur.Provider value={{ utilisateur, setUtilisateur }}>
      <div>
        <h1>TP React débutant</h1>
        <h2>Formulaire Contrôlé</h2>
        <FormulaireControle />
        <h2>Formulaire Non-Contrôlé</h2>
        <FormulaireNonControle />
        <h2>Lifting State Up</h2>
        <TemperatureConvertor />
        <h2>Profil Utilisateur</h2>
        <Profil />
      </div>
    </ContextDUtilisateur.Provider>
  );
}

export default App;
