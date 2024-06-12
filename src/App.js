import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

/**
 * Componente principal de la aplicación React.
 */
function App() {
  const [folio, setFolio] = useState('');
  const [digest, setDigest] = useState('');

  /**
   * Maneja el click del botón, enviando el folio al servicio Node.js
   * y actualizando el digest en el estado.
   */
  const handleClick = async () => {
    try {
      // Enviar solicitud POST al servicio Node.js
      const response = await axios.post('http://localhost:3000/invoke', {
        folio,
      });

      // Actualizar el estado con el digest recibido
      setDigest(response.data.digest);
    } catch (error) {
      // Manejar errores en la solicitud
      console.error('Error fetching digest', error);
    }
  };

  return (
    <div className="App">
      <h1>Digest Generator</h1>
      <input
        type="text"
        value={folio}
        onChange={(e) => setFolio(e.target.value)}
        placeholder="Enter folio"
      />
      <button onClick={handleClick}>Generate Digest</button>
      {digest && <p>Digest: {digest}</p>}
    </div>
  );
}

export default App;
