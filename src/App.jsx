
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
          {/* Placeholder for animated slider */}
          <div className="slide active">Supacoat Classic</div>
          <div className="slide">Supacoat Ultra</div>
          <div className="slide">Supacoat Pro</div>
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
