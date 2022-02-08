import React, { useState } from 'react';

/**
 * Ejemplo 04 (Contador con useState, parte 2)
 * https://fullstackopen.com/es/part1/estado_del_componente_controladores_de_eventos
 */

const Ejemplo04 = () => {

  // Uso del STATE para guardar valores.
  // Igual que el ejemplo 02 pero con "SET"
  const [count, setCount] = useState(0)

  // Funcion para manejar el click (incremento):
  const handleClickIncrement = () => {
    setCount(count + 1)
    //es lo mismo que:
    //setCount(prevContador => prevContador + 1)
    // pues "prevContador" ya va implícito en el STATE.
  }
  // Funcion para manejar el click (reset):
  const handleClickReset = () => {
    setCount(0)
  }

  const Display = (props) => {
    return <h1>Contador en: {props.counter}, es {parOimpar}</h1>
  }


  // Mensaje "par o impar":
  const isEven = count % 2 === 0;
  const parOimpar = isEven ? "PAR" : "IMPAR";

  // IMPORTANTE:
  // Un componente se renderiza cuando cambia el STATE o sus PROPS:
  return (
    <div>
      {/* <h1>El contador está a {count}, es {parOimpar}</h1> */}
      <Display counter = {count} />

      <button onClick={handleClickIncrement}>
        Incrementar contador
      </button>&nbsp;

      <button onClick={handleClickReset}>
        Reset contador.
      </button>
    </div>
  )
}

export default Ejemplo04;