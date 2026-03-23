import { useState } from 'react';

function FormulaireControle() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Nom : ${nom}
Prénom : ${prenom}
Email : ${email}
Téléphone : ${telephone}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Nom"
      />

      <input
        type="text"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        placeholder="Prénom"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        type="tel"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        placeholder="Téléphone"
      />

      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormulaireControle;