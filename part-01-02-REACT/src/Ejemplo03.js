import React, { useState } from 'react';

/**
 * Ejemplo 03 (Contador con useState, parte 2)
 * https://fullstackopen.com/es/part1/estado_del_componente_controladores_de_eventos
 */

const Ejemplo03 = () => {

  // Uso del STATE para guardar valores.
  // Igual que el ejemplo 02 pero con "SET"
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>El contador está a {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Incrementar contador
      </button>&nbsp;

      <button onClick={() => {setCount(0)}}>
        Reset contador.
      </button>
    </div>
  )
}

export default Ejemplo03;