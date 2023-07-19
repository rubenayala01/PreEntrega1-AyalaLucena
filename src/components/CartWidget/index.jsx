import carrito from "../../Icons/carrito.png"
import "./styles.css";


function CartWidget() {
  return (
    <div>
         <img src={carrito} alt="carrito" className="seeCarrito"  />
    </div>
  )
}

export default CartWidget;