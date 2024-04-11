import './ProductCard.css';


export default function ProdCard ({img,title,desctription,price, addToCart, removeFromCart}) {

  const addToCartHandler = () => {
    addToCart()
  }

  return (
    <div className="prod-card">
        <img src={img} alt={title} className="prod-img"/>
        <div className='prod-info'>
          <h1>{title}</h1>
          <p>{desctription}{price}</p>
          <strong >{price}</strong>
          <div className="container-button">
                <button onClick={addToCartHandler}>Add to Cart</button>
                <button onClick={removeFromCart}>Remove from Cart</button>
          </div>
        </div>
    </div>
  )
}