function Noticia() {
    const noticia = {
      titulo : "Aprendiendo Componentes y Desestructuracion",
      descripcion : "Demostracion de Desestructuracion de Objetos"
    }
    const { titulo, descripcion } = noticia
    return (
      <div className="classNoticia">
        <h1 className='mi-Titulo'> Mi noticia: {titulo} </h1>
      </div>
    )
  }

export default Noticia;