import React from "react";
import "./Tarea.css";

function Tarea({ tarea, onCompletar, onEliminar }) {
  return (
    <div className="tarea">
      <span
        style={{ textDecoration: tarea.completada ? "line-through" : "none" }}
      >
        {tarea.texto}
      </span>
      <div>
        <button onClick={onCompletar}>✔</button>
        <button onClick={onEliminar}>🗑</button>
      </div>
    </div>
  );
}

export default Tarea;
