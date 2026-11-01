import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="hero-eyebrow"><span /> THE SEASON'S BIGGEST EVENT</span>
        <h1>Find your next<br /><em>favourite thing.</em></h1>
        <p>Good finds. Great prices. Everything you love, all in one place.</p>
        <a className="hero-button" href="#products">Explore collection <span>→</span></a>
        <div className="hero-proof"><b>✦</b> Curated picks <i /> Easy returns <i /> Secure checkout</div>
      </div>
      <div className="hero-visual">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1100&q=90" alt="A beautifully arranged fashion store" />
        <div className="hero-sticker"><strong>UP TO</strong><b>40%</b><strong>OFF</strong></div>
        <div className="hero-caption">A little something<br />for every day.</div>
      </div>
    </section>
  )
}

export default Hero