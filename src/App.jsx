
import './App.css';

function App() {
  return (
    <div className="supacoat-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Supacoat</h1>
        <p className="hero-subtitle">Premium Product Care & Protection</p>
        <button className="cta-btn">Shop Now</button>
      </section>

      {/* Product Slider */}
      <section className="slider-section">
        <h2>Featured Products</h2>
        <div className="slider">
          <div className="slide active">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Supacoat Classic" className="product-img" />
            <h3 className="product-title">Supacoat Classic</h3>
            <p className="product-desc">Reliable protection for everyday use. Keeps surfaces shining and safe.</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="slide">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Supacoat Ultra" className="product-img" />
            <h3 className="product-title">Supacoat Ultra</h3>
            <p className="product-desc">Advanced formula for superior care. Long-lasting and ultra-effective.</p>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className="slide">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Supacoat Pro" className="product-img" />
            <h3 className="product-title">Supacoat Pro</h3>
            <p className="product-desc">Professional-grade protection for demanding environments.</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </section>

      {/* Product Care Section */}
      <section className="care-section">
        <h2>Product Care Tips</h2>
        <ul>
          <li>Clean regularly for best results.</li>
          <li>Store in a cool, dry place.</li>
          <li>Follow instructions for maximum protection.</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
