export const addToCart = (item, cartItems, setCartItems) => {
  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.title === item.title
  );

  if (existingItemIndex !== -1) {
    const updatedCartItems = [...cartItems];
    updatedCartItems[existingItemIndex].count++;
    setCartItems(updatedCartItems);
  } else {
    setCartItems([...cartItems, { ...item, count: 1 }]);
  }
};

export const removeFromCart = (item, cartItems, setCartItems) => {
  const updatedCartItems = cartItems.filter(
    (cartItem) => cartItem.title !== item.title
  );
    setCartItems(updatedCartItems);
};