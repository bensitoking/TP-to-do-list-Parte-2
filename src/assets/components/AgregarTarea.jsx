import React from "react";
import "./AgregarTarea.css"
function AgregarTarea(){
    return(
        <>
            <input type="text" id="nuevaTarea" placeholder="Escribe una tarea..."/>
            <button id="botonAgregar">Agregar</button>
        </>
    );
}
export default AgregarTarea;