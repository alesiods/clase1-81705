import "./CartWidget.css"

const CartWidget = () => {

    const imgCarrito= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS41loupzVTYrYEXzoj47Dw00090FJmYm-hdQ&s"

  return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="Imagen de un carrito de compras" />
        <strong>3</strong>
    </div>
  )
}

export default CartWidget