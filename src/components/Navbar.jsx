import React from 'react'
import './Navbar.css'

function Navbar({ search, setSearch, cartCount, onCartClick, wishlistCount }) {
  return (
    <>
      <header className="navbar">
        <a className="brand" href="#" aria-label="ShopZone home">
          Shop<span>Zone</span><i>.</i>
        </a>

        <label className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
          />
         
        </label>

        <div className="nav-actions">
          <div className="nav-small">
            <span className="nav-symbol">♡</span>
            <span className="nav-label">Wishlist <b>{wishlistCount}</b></span>
          </div>
          <button className="cart-nav" onClick={onCartClick}>
            <span className="nav-symbol">🛒</span>
            <span className="nav-label">Cart</span>
            <span className="cart-badge">{cartCount}</span>
          </button>
        </div>
      </header>

      <nav className="category-nav" aria-label="Product categories">
        <span className="category-highlight">Explore</span>
        <a href="#products">All products</a>
        <a href="#products">Electronics</a>
        <a href="#products">Fashion</a>
        <a href="#products">Accessories</a>
        <span className="delivery-note">✦ Free delivery on orders above ₹999</span>
      </nav>
    </>
  )
}

export default Navbar
