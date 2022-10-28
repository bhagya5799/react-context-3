import React from 'react'

const cartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleateCartItem: () => {},
})
export default cartContext
