

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './App.css';

function App() {
  const products = [
    {
      name: 'Supacoat Classic',
      img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      desc: 'Reliable protection for everyday use. Keeps surfaces shining and safe.',
      details: 'Supacoat Classic is perfect for daily use on windows, doors, and cabinets. Provides a lasting shine and protection.'
    },
    {
      name: 'Supacoat Ultra',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      desc: 'Advanced formula for superior care. Long-lasting and ultra-effective.',
      details: 'Supacoat Ultra offers advanced care for high-traffic areas. Ideal for professional and home use.'
    },
    {
      name: 'Supacoat Pro',
      img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      desc: 'Professional-grade protection for demanding environments.',
      details: 'Supacoat Pro is designed for industrial and commercial settings, providing maximum durability.'
    }
  ];

  const navigate = useNavigate ? useNavigate() : null;
  const handleViewDetails = (product) => {
    if (navigate) {
      navigate(`/product/${encodeURIComponent(product.name)}`);
    }
  };
  return (
    <div className="supacoat-container">
      <img src="/new logo.png" alt="Supacoat Logo" style={{width: '120px', margin: '2rem auto 1rem', display: 'block'}} />
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section className="hero">
                <h1 className="hero-title">Supacoat</h1>
                <p className="hero-subtitle">Kenya's Leading Wholesale Shop for Hardware Products</p>
                <p className="hero-location">Supplying quality hardware across the country</p>
                <button className="cta-btn">Shop Wholesale</button>
              </section>

              {/* Product Slider with Swiper */}
              <section className="slider-section">
                <h2>Featured Products</h2>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                    600: { slidesPerView: 1 },
                    900: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 }
                  }}
                  style={{ paddingBottom: '2rem' }}
                >
                  {products.map((product) => (
                    <SwiperSlide key={product.name}>
                      <div className="slide">
                        <img src={product.img} alt={product.name} className="product-img" />
                        <h3 className="product-title">{product.name}</h3>
                        <p className="product-desc">{product.desc}</p>
                        <button className="view-btn" onClick={() => handleViewDetails(product)}>View Details</button>
                        <a
                          className="whatsapp-btn"
                          href={`https://wa.me/254702771771?text=Hello%20Supacoat!%20I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >Order via WhatsApp</a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </section>

              {/* Categories Section */}
              <section className="categories-section">
                <h2>Our Hardware Categories</h2>
                <div className="categories-list">
                  <span>Window Fittings</span>
                  <span>Caster Wheels</span>
                  <span>Bathroom Fittings</span>
                  <span>Cabinet Handles</span>
                  <span>Door Locks</span>
                  <span>Taps</span>
                  <span>Gate Fittings</span>
                  <span>Sliding Channels</span>
                  <span>Soft Closing Rails</span>
                  <span>...and many more!</span>
                </div>
                <p className="categories-note">We stock over 1,000 hardware products for wholesale across Kenya.</p>
              </section>

              {/* Product Care Section */}
              <section className="care-section">
                <h2>Hardware Product Care Tips</h2>
                <ul>
                  <li>Inspect hardware regularly for wear and tear.</li>
                  <li>Store products in a dry, secure location.</li>
                  <li>Use recommended tools and safety gear.</li>
                  <li>Contact Supacoat for bulk orders and expert advice.</li>
                </ul>
              </section>
            </>
          } />
          <Route path="/product/:name" element={<ProductPage products={products} />} />
        </Routes>
      </Router>
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Supacoat</h1>
        <p className="hero-subtitle">Kenya's Leading Wholesale Shop for Hardware Products</p>
        <p className="hero-location">Supplying quality hardware across the country</p>
        <button className="cta-btn">Shop Wholesale</button>
      </section>

      {/* Product Slider */}
      <section className="slider-section">
        <h2>Featured Products</h2>
        <div className="slider">
          {products.map((product, idx) => (
            <div className={`slide${idx === 0 ? ' active' : ''}`} key={product.name}>
              <img src={product.img} alt={product.name} className="product-img" />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <button className="view-btn" onClick={() => handleViewDetails(product)}>View Details</button>
              <a
                className="whatsapp-btn"
                href={`https://wa.me/254702771771?text=Hello%20Supacoat!%20I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
              >Order via WhatsApp</a>
            </div>
          ))}
        </div>
      </section>

      {/* Product Detail Modal removed for single product page */}

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Our Hardware Categories</h2>
        <div className="categories-list">
          <span>Window Fittings</span>
          <span>Caster Wheels</span>
          <span>Bathroom Fittings</span>
          <span>Cabinet Handles</span>
          <span>Door Locks</span>
          <span>Taps</span>
          <span>Gate Fittings</span>
          <span>Sliding Channels</span>
          <span>Soft Closing Rails</span>
          <span>...and many more!</span>
        </div>
        <p className="categories-note">We stock over 1,000 hardware products for wholesale across Kenya.</p>
      </section>

      {/* Product Care Section */}
      <section className="care-section">
        <h2>Hardware Product Care Tips</h2>
        <ul>
          <li>Inspect hardware regularly for wear and tear.</li>
          <li>Store products in a dry, secure location.</li>
          <li>Use recommended tools and safety gear.</li>
          <li>Contact Supacoat for bulk orders and expert advice.</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
