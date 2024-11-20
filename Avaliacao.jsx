import React, { useState } from 'react';

const Avaliacao = () => {
  const [nota, setNota] = useState(0);

  const handleRatingChange = (event) => {
    setNota(event.target.value);
  };

  return (
    <section>
      <h2>Avaliação</h2>
      <p>Deixe sua avaliação sobre o site:</p>
      <select value={nota} onChange={handleRatingChange}>
        <option value="0">Selecione uma nota</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <p>Sua nota: {nota}</p>
    </section>
  );
};

export default Avaliacao;
