import React from "react";
import "./Filtros.css";

function Filtros({ onFiltrar }) {
  return (
    <div className="filtros">
      <button onClick={() => onFiltrar("todas")}>Todas</button>
      <button onClick={() => onFiltrar("pendientes")}>Pendientes</button>
      <button onClick={() => onFiltrar("completadas")}>Completadas</button>
    </div>
  );
}

export default Filtros;
