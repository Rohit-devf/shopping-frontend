import React from 'react'
import './ProductCard.css'

function ProductCard({ product, onAddToCart, isWishlisted, onToggleWishlist }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button className={`wish-button ${isWishlisted ? 'is-wishlisted' : ''}`} onClick={() => onToggleWishlist(product.id)} aria-label="Toggle wishlist">
          {isWishlisted ? '♥' : '♡'}
        </button>
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-meta"><span>★ {product.rating}</span><strong>₹{product.price.toLocaleString('en-IN')}</strong></div>
        <button className="add-button" onClick={() => onAddToCart(product)}>Add to cart <span>＋</span></button>
      </div>
    </article>
  )
}

export default ProductCard