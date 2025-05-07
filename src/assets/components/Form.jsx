import React from "react";
import Filtros from "./Filtros";
import AgregarTarea from "./AgregarTarea";
import Tarea from "./Tarea";
import "./Form.css"
function Formulario()
{
  return(
<div class="contenedor">
    <h1>Lista de Tareas</h1>
    <AgregarTarea/>
    <Filtros/>
    <Tarea/>
    <button id="eliminarCompletadas">Eliminar Completadas</button>
    <p id="infoRapida"></p>
  </div>
  )

}
export default Formulario;