import React, { useState, useEffect } from "react";
import Filtros from "./Filtros";
import AgregarTarea from "./AgregarTarea";
import Tarea from "./Tarea";
import "./Form.css";

function Formulario() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("tareas");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  const [filtro, setFiltro] = useState("todas");

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (texto) => {
    if (texto.trim() === "") return;
    setTareas([...tareas, { texto, completada: false }]);
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  const completarTarea = (index) => {
    setTareas(
      tareas.map((tarea, i) =>
        i === index ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarCompletadas = () => {
    setTareas(tareas.filter((t) => !t.completada));
  };

  // Filtrar tareas según filtro activo
  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "todas") return true;
    if (filtro === "pendientes") return !tarea.completada;
    if (filtro === "completadas") return tarea.completada;
  });

  return (
    <div className="contenedor">
      <h1>Lista de Tareas</h1>
      <AgregarTarea onAgregar={agregarTarea} />
      <Filtros onFiltrar={setFiltro} />
      {tareasFiltradas.map((tarea, i) => (
        <Tarea
          key={i}
          tarea={tarea}
          onCompletar={() => completarTarea(i)}
          onEliminar={() => eliminarTarea(i)}
        />
      ))}
      <button onClick={eliminarCompletadas}>Eliminar Completadas</button>
      <p id="infoRapida">Total: {tareasFiltradas.length} tareas</p>
    </div>
  );
}

export default Formulario;
