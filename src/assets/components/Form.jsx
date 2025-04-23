import React from "react";
import Filtros from "./Fitltros";
import AgregarTarea from "./AgregarTarea";
import Tarea from "./Tarea";
import "./Form.css"
<link rel="stylesheet" href="Form.css" />
function Form()
{
<div class="contenedor">
    <h1>Lista de Tareas</h1>
    <AgregarTarea/>
    <Filtros/>
    <Tarea/>
    <button id="eliminarCompletadas">Eliminar Completadas</button>
    <p id="infoRapida"></p>
  </div>
}
export default Form;