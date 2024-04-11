import { BsCart4 } from "react-icons/bs";
import '../AddToCart/addToCart.css'

export default function  CartIcon ({cartItems}) {
  return (
    <div className="container">
    <div id="icon" className={cartItems.length > 0 ? "cart-has-items" : ""}>
      <BsCart4 />
      {cartItems.length > 0 && (
        <div className="cart-count">
          <strong>Shoping Cart:</strong>
          {cartItems.map((item, index) => (
            <span key={index}>{item.title}  {item.count},</span>
          ))}
        </div>
      )}
    </div>
  </div>
  )
}