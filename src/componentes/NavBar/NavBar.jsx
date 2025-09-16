import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"


const NavBar = () => {


  return (
    <header>
      <Link to="/">
        <img className="logoMarolio" src={"../../../public/img/logo.png"} alt="Logo Marolio" />
      </Link>
        <nav>
            <ul>
                <li> 
                  <Link className="estiloLink" to="/categoria/lacteos"> Lacteos </Link> 
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