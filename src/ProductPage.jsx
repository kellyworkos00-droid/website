import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductPage({ products }) {
  const { name } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => encodeURIComponent(p.name) === name);

  if (!product) {
    return (
      <div style={{ color: '#fff', textAlign: 'center', marginTop: '3rem' }}>
        <h2>Product not found</h2>
        <button className="close-btn" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="product-page" style={{ color: '#fff', textAlign: 'center', marginTop: '3rem' }}>
      <img src={product.img} alt={product.name} className="modal-img" style={{ marginBottom: '1rem' }} />
      <h3 className="modal-title">{product.name}</h3>
      <p className="modal-desc">{product.details}</p>
      <a
        className="whatsapp-btn modal-whatsapp"
        href={`https://wa.me/254702771771?text=Hello%20Supacoat!%20I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
        target="_blank"
        rel="noopener noreferrer"
      >Order via WhatsApp</a>
      <br />
      <button className="close-btn" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default ProductPage;