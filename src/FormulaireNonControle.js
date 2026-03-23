import { useRef } from 'react';

function FormulaireNonControle() {
  const nomRef = useRef();
  const prenomRef = useRef();
  const emailRef = useRef();
  const telephoneRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nom = nomRef.current.value;
    const prenom = prenomRef.current.value;
    const email = emailRef.current.value;
    const telephone = telephoneRef.current.value;

    alert(`Nom : ${nom}
Prénom : ${prenom}
Email : ${email}
Téléphone : ${telephone}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nomRef} placeholder="Nom" />
      <input type="text" ref={prenomRef} placeholder="Prénom" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <input type="tel" ref={telephoneRef} placeholder="Téléphone" />
      
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormulaireNonControle;