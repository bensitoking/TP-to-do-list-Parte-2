import React from "react";
import "./Tarea.css"
<link rel="stylesheet" href="Tarea.css" />

function Tarea(){
    return (
        <>
            <span>Cocinar</span>
            {/*${tarea.texto}*/}
        <div>
            <button >✔</button>
            {/*onclick="completar(${indexReal})"*/}
            <button >🗑</button>
            {/*onclick="borrar(${indexReal})"*/}
        </div>
    </>
    );
    
}
export default Tarea;