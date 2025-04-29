import React from "react";
import "./Filtros.css"
<link rel="stylesheet" href="Filtros.css" />
function Filtros(){
    return(
        <div class="filtros">
      <button data-filtro="todas">Todas</button>
      <button data-filtro="pendientes">Pendientes</button>
      <button data-filtro="completadas">Completadas</button>
    </div>
    );
    
}
export default Filtros;