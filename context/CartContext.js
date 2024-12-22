import React, { createContext, useState } from 'react';
import { useContext } from 'react';
export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
  
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalItemValue = cartItems.map(item => item.price * item.quantity);

  // Calculate the total value of all items in the cart
  const totalCartValue = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Find the item in the cart
      const existingItem = prevItems.find(i => i.id === item.id);

      if (existingItem) {
        // If the item is already in the cart, increase the quantity
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // If the item is not in the cart, add it with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };


  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter(item => item.id !== itemId)
    );
  };

  console.log(cartItems)
  const contextValues = {
    cartCount,
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    totalCartValue,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};