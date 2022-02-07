import React, { useState } from 'react';

/**
 * Ejemplo 05 (Contador con useState, parte 3)
 * https://fullstackopen.com/es/part1/estado_del_componente_controladores_de_eventos
 */

const Ejemplo05 = () => {

  // Uso del STATE para guardar múltiples valores en un objeto:
  const [count, setCount] = useState(
    {
      left: 0,
      right: 0,
      titulo: "Contador de clicks usando el STATE y SPREAD."
    }
  )
  // Esto nos servirá exclusivamente para gestionar los clicks totales:
  const [clicks, setClicks] = useState([]);


  //------------------------------------------------------------
  // NOTA: El Estado es inmutable. Para modificar sus propiedades,
  // Lo haremos desde los "SET". Nunca hacer "count++" sino
  // "setCount(count + 1)"
  //------------------------------------------------------------
  // Funcion para manejar el click (Izquierda):
  const handleClickLeft = () => {
    const newCountState = {
      // Usamos el SPREAD para obtener los valores originales
      // y modificar SOLAMENTE los que queremos:
      ...count,
      left: count.left + 1,
    }
    // Seteamos ese nuevo valor del State:
    setCount(newCountState);
    // Queremos guardar en un Array "L" o "R" según el botón clicado.
    // Aquí es necesario saber el estado actual (inventamos la variable "prevClicks") 
    // y así podremos hacer SPREAD para añadirle "L":
    setClicks((prevClicks) => [...prevClicks, "L"]);
  }
  //------------------------------------------------------------
  // Funcion para manejar el click (Derecha):
  const handleClicRight = () => {
    const newCountState = {
      // Usamos el SPREAD para obtener los valores originales
      // y modificar SOLAMENTE los que queremos:
      ...count,
      right: count.right + 1,
    }
    // Seteamos ese nuevo valor del State:
    setCount(newCountState);
    setClicks((prevClicks) => [...prevClicks, "R"]);
  }

  // IMPORTANTE:
  // Un componente se renderiza cuando cambia el STATE o sus PROPS:
  return (    
    <div>
      <h3>{count.titulo}</h3>
      {count.left} &nbsp;
      <button onClick={handleClickLeft}>
        LEFT
      </button>
      &nbsp;
      <button onClick={handleClicRight}>
        RIGHT.
      </button>
      &nbsp;{count.right}
      <p>Clicks totales: {clicks.length}</p>
      <p>Secuencia de clicks:</p>
      <p>{clicks.join(",")}</p>
      {/* 
      //------------------------------------------------------------
      Podemos llamar a "setCount" inline enviando el objeto inicialidado
      siempre con el operador SPREAD como hemos visto antes: 
      //------------------------------------------------------------
      */}
      <button onClick={() => {
          setCount({...count, left:0, right:0});
          setClicks([]);
        }       
      }>
        RESET.
      </button>
      {/* 
      //------------------------------------------------------------ */}
    </div>
  )
}

export default Ejemplo05;