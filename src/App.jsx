import { useState,useEffect } from 'react';
import './App.css';
import {obtenerTodo} from './funciones'
function App() {
  //se crean los cuatro estados que se encuentran en info

  const [siguiente,setSiguiente]=useState(null)
  const [anterior,setAnterior]=useState(null)
  const [total,setTotal]=useState(null)
  const [paginas,setPaginas]=useState(null)
  const [personajes,setPersonajes]=useState(null)
  const [url,setUrl]=useState("https://rickandmortyapi.com/api/character/?page=1")
  
  
  useEffect(()=>{
    obtenerTodo(url,setAnterior,setSiguiente,setTotal,setPaginas,setPersonajes)
  },[url])


  const ir=(url)=>{
    setUrl(url)
  }
  return (
    <div className='contedor'>
    <div className='header'>
      <h2>Bienvenidos a la app de Rick y morty</h2>
      <p>Total de personajes: {total}</p>
      <p>Cantidad de paginas: {paginas}</p>
      {anterior !== null?(
        <button onClick={()=>ir(anterior)}>Anterior</button>
      ):('')}
      {siguiente !== null ? (
  <button onClick={() => ir(siguiente)}>Siguiente</button>
) : ('')}

      
    </div>
    <div>
      {personajes !== null? (
        personajes.map(
          personaje=>(
            <p>{personaje.name}</p>
          )
          
        )
      ):('')}
    </div>
      
    </div>
  );
}

export default App;
