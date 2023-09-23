import React from 'react'


// const bienvenido='Bienvenido a Evolutech'
// const titulo='Comenzando con React'
// const subtitulo='Libreria de JavaScript'
// const autor ={
//     nombre:'Maria',
//     apellido:'Ramos'
// }

const mostrarFecha =(hora)=>{
    const meses =[
        "Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre"
    ]
    const mes = meses[hora.getMonth()].slice(0,3)
    const año = hora.getFullYear()
    const fecha = hora.getDate()
    return `${fecha} ${mes},${año}`
}

const Header = (props) => {
    const datos = props.dato
    const {bienvenida,titulo, subtitulo,fecha,
    autor:{nombre,apellido}} = datos
    return (
    <>
    <header>
        <h1>{bienvenida}</h1>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        <p>
            {nombre} {apellido}
        </p>
        <small>{mostrarFecha(fecha)}</small>
    </header>
    </>
  )
}

export default Header