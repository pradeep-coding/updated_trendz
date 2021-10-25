import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalCost = 0
      const cartItemsCount = cartList.length
      cartList.forEach(eachItem => {
        const cost = eachItem.price * eachItem.quantity
        totalCost += cost
      })

      return (
        <>
          <div className="summary-container">
            <h1 className="total-cost">
              Order Total: <span className="final-price">Rs {totalCost}/-</span>
            </h1>
            <p className="final-cart-quantity">
              {cartItemsCount} Items in cart
            </p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
