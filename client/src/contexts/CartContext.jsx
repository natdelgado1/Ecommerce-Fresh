import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    
  }, [cart]);

  const addToCart = (product, talla, cantidad) => {
    const detail = {
      _id: product._id,
      price: product.price,
      title: product.title,
      talla: talla,
    };

    const existingItem = cart.find(
      (item) => item._id === detail._id && item.talla === detail.talla
    );

    if (existingItem) {
      const updatedCart = cart.map((item) => {
        if (item._id === detail._id && item.talla === detail.talla) {
          return {
            ...item,
            quantity: item.quantity + cantidad, // Modifica la cantidad si el artículo ya está en el carrito
          };
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...detail, quantity: cantidad }]);
    }
  };

  const removeFromCart = (productId, talla) => {
    setCart(cart.filter((item) => item._id !== productId || item.talla !== talla));
  };
  const removeAll = (productId, talla) => {
    setCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalCount = () => {
    return cart.reduce((totalCount, item) => totalCount + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        calculateTotal,
        calculateTotalCount,
        removeAll
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// En cualquier componente donde necesites acceder al carrito:
export const useCart = () => {
  return useContext(CartContext);
};
