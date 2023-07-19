import "./styles.css"
import CartWidget from "../CartWidget";
function Navbar() {
  return (
   <div className="nav-container">
    <nav className="navbar">
    <h1 className="navbar-logo">LibroShop.</h1>

    <CartWidget/>
    </nav>
   </div>


  );
}

export default Navbar