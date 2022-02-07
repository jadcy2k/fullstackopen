/**
 * Ejemplo 02 (Contador con useState, parte 1)
 * https://fullstackopen.com/es/part1/estado_del_componente_controladores_de_eventos
 */

// importamos useState, el hook para crear un state en nuestro componente
import React, { useState } from 'react';

const Ejemplo02 = (props) => {
  /**
   * Uso del STATE para guardar valores
   */
  // Se inicializa a "0":
  const contador = useState(0);
  // Contador contendrá en primer lugar su valor:
  const contadorValue = contador[0];
  // En segundo lugar la función de actualización:
  const updateContador = contador[1];

  setInterval ( () => {
    updateContador(contadorValue + 1);
  }, 1000);

  return (
    <h1>Contador: {contadorValue}</h1>

  );
}

export default Ejemplo02;