import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"


const NavBar = () => {


  return (
    <header>
      <Link to="/">
        <h1>Tienda Marolio</h1>
      </Link>
        <nav>
            <ul>
                <li> 
                  <Link to="/categoria/lacteos"> Lacteos </Link> 
                </li>
                <li>
                  <Link to="/categoria/almacen"> Almacen </Link>
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
    
  )
}

export default NavBar