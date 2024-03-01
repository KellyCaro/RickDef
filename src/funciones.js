export const obtenerTodo=async(url,setAnterior,setSiguiente,setTotal,setPaginas,setPersonajes)=>{
    const peticion =await fetch(url);
    const {info,results}=await peticion.json();

    setSiguiente(info.next)
    info.prev =! null ? setAnterior(info.prev):setAnterior(null)
    setPersonajes(results)
    setTotal(info.count)
    setPaginas(info.pages)
}