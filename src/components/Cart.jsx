import React from 'react'
import './Cart.css'

function Cart({ items, onClose, onChangeQuantity, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const count = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="cart-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <aside className="cart-panel" aria-label="Shopping cart">
        <div className="cart-heading">
          <div><span className="cart-kicker">YOUR BAG</span><h2>Shopping cart <small>({count})</small></h2></div>
          <button className="close-cart" onClick={onClose} aria-label="Close cart">×</button>
        </div>
        {items.length === 0 ? (
          <div className="empty-cart"><span>🛍️</span><h3>Your cart is empty</h3><p>Looks like you haven't added anything yet.</p><button onClick={onClose}>Continue shopping</button></div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3><p>₹{item.price.toLocaleString('en-IN')}</p>
                    <div className="quantity-control">
                      <button onClick={() => onChangeQuantity(item.id, -1)} aria-label="Decrease quantity">−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onChangeQuantity(item.id, 1)} aria-label="Increase quantity">＋</button>
                    </div>
                  </div>
                  <button className="remove-item" onClick={() => onRemove(item.id)}>Remove</button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div><span>Subtotal ({count} items)</span><strong>₹{total.toLocaleString('en-IN')}</strong></div>
              <p>Shipping and taxes calculated at checkout.</p>
              <button className="checkout-button" onClick={() => window.alert('This is a frontend demo. Checkout/payment is not connected yet.')}>Continue to checkout <span>→</span></button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default Cart