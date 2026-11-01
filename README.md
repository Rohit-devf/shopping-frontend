# ShopZone — React E-commerce Starter

A beginner-friendly frontend shopping project built with React, JavaScript and CSS.

## Features
- Responsive navigation bar with product search
- Hero / promotional section
- Product cards with category filters
- Add to cart, increase/decrease quantity, remove items
- Cart subtotal and item count
- Wishlist toggle
- Cart and wishlist saved in localStorage
- No backend required; product data is stored locally

## Run locally
1. Install Node.js (LTS).
2. Extract this ZIP and open the `ShopZone` folder in VS Code.
3. Open the terminal in that folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Project structure
```text
ShopZone/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── data/products.js
    └── components/
        ├── Navbar.jsx
        ├── Navbar.css
        ├── Hero.jsx
        ├── Hero.css
        ├── ProductCard.jsx
        ├── ProductCard.css
        ├── Cart.jsx
        └── Cart.css
```

Product images are loaded from Unsplash, so an internet connection is needed for those images. This is a frontend learning project; checkout/payment and real user accounts are not connected.
