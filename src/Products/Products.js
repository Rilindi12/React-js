import ProdCard from "./ProdCard";
import { shopData } from "../data/shopData";
import './ProductCard.css';
import { useState } from "react";
import SearchBar from "../SearchBar/searchBar";
import CartIcon from "../AddToCart/CartIcon";
import { addToCart, removeFromCart } from "../AddToCart/addToCart";

export default function Product () {
  const [cartItems, setCartItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(shopData);

  const applyFilters = (filteredItems) => {
    setFilteredItems(filteredItems);
  }


  return (
      <div className='product-page-container'>
        <div className='search-bar-container'>
          <CartIcon cartItems={cartItems}/>
          <SearchBar applyFilters={applyFilters} />
        </div>
        <div className='prodcard-container'>
          {filteredItems.map((item, index) => ( 
            <ProdCard
              key={index}
              img={item.img}
              title={item.title}
              desctription={item.desctription}
              price={item.price}
              addToCart={() => addToCart(item, cartItems, setCartItems)}
              removeFromCart={() => removeFromCart(item, cartItems, setCartItems)}
            />
          ))}
        </div>
      </div>
  )
    
}