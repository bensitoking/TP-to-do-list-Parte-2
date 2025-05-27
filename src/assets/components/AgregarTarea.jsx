import React, { useState } from "react";
import "./AgregarTarea.css";

function AgregarTarea({ onAgregar }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = () => {
    onAgregar(texto);
    setTexto("");
  };

  return (
    <>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button onClick={handleSubmit}>Agregar</button>
    </>
  );
}

export default AgregarTarea;
