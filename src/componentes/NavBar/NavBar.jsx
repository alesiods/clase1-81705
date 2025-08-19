import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


const NavBar = () => {


  return (
    <header>
        <h1>Tienda Marolio</h1>
        <nav>
            <ul>
                <li>Lacteos</li>
                <li>Almacen</li>
                <li>Bebidas</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
    
  )
}

export default NavBar