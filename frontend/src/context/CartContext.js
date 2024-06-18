import { createContext, useContext, useState } from "react"

const CartContext = createContext({});

const useCart = () => {
  return useContext(CartContext)
}

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [cartItems, setCartItems] = useState([]);

  const openCart = () => { 
    setIsCartOpen(true); 
  }

  const closeCart = () => { 
    setIsCartOpen(false); 
  }

  const resetCart = () => { 
    setCartItems([]);
  }

  const cartTotalQuantity = cartItems.reduce((total, each) => { return total + each.quantity; }, 0);

  const cartTotalItems = cartItems;

  const getItemQuantity = (id) => {
    const item = cartItems.find((each) => each.item === id);
    return item ? item.quantity : 0; 
  }
  
  const increaseItemQuantity = (id) => { 
    setCartItems((current) => {
      const item = current.find((each) => each.item === id);

      if (!item) { 
        return [...current, { item: id, quantity: 1, remark: '' }];
      }
      else { 
        return current.map((each) => {
          if (each.item === id) {
            return { ...each, quantity: each.quantity + 1 };
          }
          else { 
            return each;
          }
        })
      }
    })
  }

  const decreaseItemQuantity = (id) => { 
    setCartItems((current) => {
      const item = current.find((each) => each.item === id);

      if (item.quantity === 1) { 
        return current.filter((each) => each.item !== id);
      }
      else { 
        return current.map((each) => {
          if (each.item === id) {
            return { ...each, quantity: each.quantity - 1 };
          }
          else { 
            return each;
          }
        })
      }
    })
  }

  const updateItemRemark = (id, remark) => { 
    setCartItems((current) => { 
      const item = current.find((each) => each.item === id); 

      return current.map((each) => { 
        if (each.item === id) { 
          return { ...each, remark: remark};
        }
        else { 
          return each; 
        }
      })
    })
  }

  const removeItem = (id) => {
    setCartItems((current) => { 
      return current.filter((each) => each.item !== id);
    })
  }


  return (
    <CartContext.Provider value={{ openCart, closeCart, resetCart, cartTotalQuantity, cartTotalItems, getItemQuantity, increaseItemQuantity, decreaseItemQuantity, updateItemRemark, removeItem }}>
      { children }
    </CartContext.Provider>
  )
}

export { CartContext, useCart, CartProvider };