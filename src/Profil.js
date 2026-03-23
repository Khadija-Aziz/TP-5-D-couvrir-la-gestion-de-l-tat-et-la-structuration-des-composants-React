import { useContext } from 'react';
import { ContextDUtilisateur } from './ContextDUtilisateur';

function Profil() {
  const { utilisateur, setUtilisateur } = useContext(ContextDUtilisateur);

  const deconnexion = () => {
    setUtilisateur({ nom: '', connecte: false });
  };

  return (
    <div>
      {utilisateur.connecte ? (
        <>
          <p>Bonsoir, {utilisateur.nom}</p>

          <button onClick={deconnexion}>Se déconnecter</button>
        </>
      ) : (
        <p>Veuillez connecter.</p>

      )}
    </div>
  );
}

export default Profil;