import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// COMENTAR Y DESCOMENTAR MÓDULOS PARA PROBARLOS EN localhost:3000:
//import App from './App';
//import Ejemplo01 from './Ejemplo01';
//import Ejemplo02 from './Ejemplo02';
//import Ejemplo03 from './Ejemplo03';
//import Ejemplo04 from './Ejemplo04';
import Ejemplo05 from './Ejemplo05';


// INDEX es la página principal.
// -------------------------------------------------------------
// Aquí cargamos el módulo que queremos visualizar, y 
// lo inyectará en el elemento #root (ver public/index.html)

// Para testear, podremos ir comentando los módulos "Ejemplo0x":
// y ver el resultado en localhost:3000
ReactDOM.render(
    <Ejemplo05 />,
    document.getElementById('root')
);

