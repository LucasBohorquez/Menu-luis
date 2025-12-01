import React from 'react'
import { useState } from 'react'
import {Link } from 'react-router-dom'

function Home() {
    const [render, setRender] = useState("todos");

    const Menu = [{
    perros:[{
    nombre:"Perro sencillo",
    precio:"5000$",
    descripcion:"Pan, salchica, papas chongo",
    img:"../src/assets/combo.jfif"
},
{
    nombre:"Perro suizo",
    precio:"6000$",
    descripcion:"Pan, salchica suiza, papas chongo",
    img:"../src/assets/combo.jfif"
}],
hamburguesas:[{
    nombre:"Hamburguesa Carne",
    precio:"10000$",
    descripcion:"Pan, carne, tomate",
    img:"../src/assets/burger.jfif"
},
{
    nombre:"Hamburguesa pollo",
    precio:"12000$",
    descripcion:"Pan, pollo, tomate",
    img:"../src/assets/burgerchicken.jfif"
}],picadas:[{
    nombre:"ChoriButi",
    precio:"9000$",
    descripcion:"Chorizo, butifarra, bollo",
    img:"../src/assets/butichori.jfif"
},
{
    nombre:"Chicharron",
    precio:"7000$",
    descripcion:"Chicharron, bollo",
    img:"../src/assets/chicharrones.jfif"
},
{
    nombre:"Nuggets",
    precio:"12000$",
    descripcion:"Nuggets, Papas",
    img:"../src/assets/nuggets.jfif"
}
]
}]

const ocultarP = () =>{setRender("perros")}
const ocultarB = () =>{setRender("burger")}
const ocultarPi = () =>{setRender("picadas")}
const todos = () =>{setRender("todos")}

  return (
  <>

  <div id="botones">
    <button onClick={ocultarP} className='boton'>Perros</button>
    <button onClick={ocultarB} className='boton'>Hamburguesas</button>
    <button onClick={ocultarPi} className='boton'>Picadas</button>
    <button onClick={ocultarP} className='boton'>Perros</button>
    <button onClick={ocultarB} className='boton'>Hamburguesas</button>
    <button onClick={ocultarPi} className='boton'>Picadas</button>
    <button onClick={todos} className='boton'>Ver Todos</button>
  </div>
<div className='GranMenu'>
{(render === "perros" || render === "todos") && (
    <div className="menu" id="perros">
    <h1 className='text-4xl mb-10'>Perros</h1>
  {Menu.map((menu)=>(
    menu.perros.map(p=>(
        <div className='platos' key={p.nombre}>
        <div className='info'>
        <img className='imagenes' src={p.img} alt={p.nombre} />
        <div className='flex flex-col gap-5'>
        <h1 className='text-2xl'>{p.nombre}</h1>
        <p>{p.descripcion}</p>
        </div>
        </div>
        <h1 className='text-3xl'>{p.precio}</h1>
        </div>
    ))

  ))}
  </div>
)}
  
{(render === "burger" || render === "todos") && (
<div className="menu" id="hamburguesas">
  <h1 className='text-4xl mb-10'>Hamburguesas</h1>
    {Menu.map((menu)=>(
    menu.hamburguesas.map(p=>(
        <div className='platos' key={p.nombre}>
        <div className='info'>
        <img className='imagenes' src={p.img} alt={p.nombre} />
        <div className='flex flex-col gap-5'>
        <h1 className='text-2xl'>{p.nombre}</h1>
        <p>{p.descripcion}</p>
        </div>
        </div>
        <h1 className='text-3xl'>{p.precio}</h1>
        </div>
    ))

  ))}
</div>
)}
{(render === "picadas" || render === "todos") && (
<div className="menu" id="picadas">
  <h1 className='text-4xl mb-10'>Picadas</h1>
    {Menu.map((menu)=>(
    menu.picadas.map(p=>(
        <div className='platos' key={p.nombre}>
        <div className='info'>
        <img className='imagenes' src={p.img} alt={p.nombre} />
        <div className='flex flex-col gap-5'>
        <h1 className='text-2xl'>{p.nombre}</h1>
        <p>{p.descripcion}</p>
        </div>
        </div>
        <h1 className='text-3xl'>{p.precio}</h1>
        </div>
    ))

  ))}
</div>
)}
  </div>
  
  </>
  )
}

export default Home