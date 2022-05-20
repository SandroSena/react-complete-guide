import React from 'react';

const CartContext = React.createContext({
  items: [],
  titalAmount: 0,
  addItem: () => { },
  removeItem: () => { }
})

export default CartContext;