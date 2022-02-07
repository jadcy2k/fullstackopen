/**
 * Ejemplo 01 (Manejo básico de props)
 * https://fullstackopen.com/es/part1/introduccion_a_react
 */

// SIEMPRE en mayúsculas para evitar coincidencias con etiquetas HTML. 
const Title = (props) => {
  // Desestructurar objeto:
  const {course} = props;
  // es lo mismo que: const course = props.course;
  return (
    <h1>{course}</h1>
  );
}
 // SIEMPRE en mayúsculas para evitar coincidencias con etiquetas HTML.
const Mensaje = (props) => {
  // Se puede también devolver la propiedad del objeto "props":
  return <h1 style={{color: props.color}}>{props.text}</h1>
}

// Más simple todavía:
// Componente "One-liner": No necesita el "return" y 
// se puede acceder a la propiedad con {} y sin pasar el "props":
const MensajeOneLiner = ({texto}) => <h2>{texto}</h2> 
 

const Ejemplo01 = () => {
  return (
    <div className="App">
      <Title course="Ejemplo 1: Bootcamp Full Stack 2021" />

      <Mensaje color="red" text="hola qué tal mundo!!" />
      <Mensaje color="turquoise" text="Otro mensaje." />
      <Mensaje color="gray" text="Un bonito mensaje." />

      <MensajeOneLiner texto="Esto es un componente 'one-liner'" />
    </div>
  );
}

export default Ejemplo01;