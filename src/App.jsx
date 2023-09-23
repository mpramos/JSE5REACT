import './App.css'
import Habilidades from './Habilidades'
import Header from './Header'

const Edad=(props)=> <div>La persona tiene {props.edad} años </div>
const Peso=(props)=> <p>El peso del objeto en la Tiera es {props.peso} N.</p>
const Estado=(props)=> {
  let estado= props.estado ? 'Suficientemente mayor para conducir ': 'Demasiado joven para conducir'
  return <p>{estado}</p>
}

const Button= (props)=><button onClick={props.onClick}>{props.texto}</button>
function App() {
  const saludarPersona = ()=>{
    alert('Bienvenido')
  }
  //! Props de tipos strings
// const bienvenida='Bienvenido a Evolutech'
// const titulo='Comenzando con React'
// const subtitulo='Libreria de JavaScript'
const nombre='Maria'
const apellido='Ramos'
const fecha='18 de Septiembre, 2023'
//! Props de tipo numerico
let añoActual=2023
let añoNacimiento=2020
const edad= añoActual - añoNacimiento
const gravedad= 9.81
const masa =75
//! Props de tipo booleano
let estado= edad >= 18
//! Props de tipo objeto
const dato={
  bienvenida:'Bienvenido a Evolutech',
  titulo:'Comenzando con React',
  subtitulo:'Libreria de JavaScript',
   autor : {
    nombre: 'maria',
    apellido:'ramos',
  },
  fecha:new Date()
}

return (
  <>
      <Header
        dato ={dato}
     
        // nombre={nombre}
        // apellido={apellido}
        // fecha={fecha}
        />
      <Edad edad={edad}/>
      <Peso peso={gravedad*masa}/>
      <Estado estado={estado}/>
        {/* //! Props de tipo arreglo */}
      <Habilidades habilidades={['HTML','CSS','JavaScript']}/>
      <Button texto="Click me" onClick={()=>alert('hola')}/>
      <Button texto="saludar" onClick={saludarPersona}/>
    </>
  )
}

export default App
