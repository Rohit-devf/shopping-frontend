import React, { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import products from './data/products'
import './App.css'

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : fallback
  } catch {
    return fallback
  }
}

function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [cartItems, setCartItems] = useState(() => readStorage('shopzone-cart', []))
  const [wishlist, setWishlist] = useState(() => readStorage('shopzone-wishlist', []))
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('shopzone-cart', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('shopzone-wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const categories = ['All', ...new Set(products.map((product) => product.category))]

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'All' || product.category === category
      return matchesSearch && matchesCategory
    })
  }, [search, category])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  function handleAddToCart(product) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  function handleChangeQuantity(id, change) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) => item.id === id ? { ...item, quantity: item.quantity + change } : item)
        .filter((item) => item.quantity > 0)
    )
  }

  function handleRemoveFromCart(id) {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  function handleToggleWishlist(id) {
    setWishlist((current) =>
      current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id]
    )
  }

  return (
    <div className="app-shell">
      <Navbar
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onCartClick={() => setCartOpen(true)}
      />
      <main>
        <Hero />
        <section className="products-section" id="products">
          <div className="section-top">
            <div>
              <span className="section-eyebrow">HANDPICKED FOR YOU</span>
              <h2>Featured products<span>.</span></h2>
              <p>Everyday favourites, picked just for you.</p>
            </div>
            <div className="product-count">{filteredProducts.length} products</div>
          </div>

          <div className="filter-row" aria-label="Filter products by category">
            {categories.map((item) => (
              <button
                key={item}
                className={`filter-chip ${category === item ? 'active' : ''}`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={handleToggleWishlist}
                />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <span>⌕</span><h3>No products found</h3>
              <p>Try another search term or category.</p>
              <button onClick={() => { setSearch(''); setCategory('All') }}>Clear filters</button>
            </div>
          )}
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand" href="#">Shop<span>Zone</span><i>.</i></a>
        <p>Find something you'll love. © {new Date().getUTCFullYear()} ShopZone.</p>
      </footer>
      {cartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onChangeQuantity={handleChangeQuantity}
          onRemove={handleRemoveFromCart}
        />
      )}
    </div>
  )
}

export default App