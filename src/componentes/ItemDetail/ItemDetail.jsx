import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState } from "react"

import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"


const ItemDetail = ({id, nombre, precio, img, stock}) => {

  //creamos un estado local con la canitdad de productos agregados
  const [agregarCantidad, setAgregarCantidad] = useState(0)


  const {agregarAlCarrito} = useContext(CarritoContext)

  //cremaos una funcion manjeadora de la cantidad

  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);
    /* console.log("Productos agregados: " + cantidad) */

    //Ahora aca yo puedo crear un objeto con item y la cantidad
    const item= {id, nombre, precio}
    agregarAlCarrito(item, cantidad)
  }

  return (
    <div className="contenedorItem">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit exercitationem ab non perspiciatis reprehenderit facere! Quae perspiciatis laudantium officia? Minus, facilis molestias? Ex et eos nisi illum alias suscipit!</p>
        {
          agregarCantidad > 0 ?(<Link to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }

    </div>
  )
}

export default ItemDetail