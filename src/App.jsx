import Boton from "./componentes/Boton/Boton"
import "./App.css"
import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
import ItemCount from "./componentes/ItemCount/ItemCount"
import NavBar from "./componentes/NavBar/NavBar"



const App = () => {
  
    /* function saludo(){
      console.log("hola")
    }
    saludo()


    let cantidad = 47

    let colorFondo = {backgroundColor: "green"} */

    const celular ={
      marca: "Samsung",
      precio: 700000
    }


  return (

    <>
      {/* <h1>Hola chicos, bienvenidos a la clase de hoy, somos {cantidad} alumnos</h1>
      <h2 style={colorFondo}>Soy un subtitulo</h2>
      <h3 style={{color: "blue"}}>Esta es la 2da clase</h3>
      <h4 className="colorTitulo">soy un h4</h4> 
      <Boton texto="Comprar"/>
      <Boton texto="Eliminar"/>
      <TituloPrincipal saludo="Hola Comision" producto={celular}/>
      <ItemCount stock={15}/>
      <ItemCount stock={20}/>
      <ItemCount stock={10}/>*/}

      <NavBar/>
      
    </>
    
   
  )
}

export default App