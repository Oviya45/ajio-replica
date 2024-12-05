import React from 'react';
import './Kids.css';

const KidsCollection = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Kids T-shirt', price: 299, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/61a017f7-b552-4814-89a8-53382eacc0df/K+NSW+TEE+SB+LOGO.png' },
    { id: 2, name: 'Kids Shoes', price: 799, image: 'https://i0.wp.com/stefensshoes.com/wp-content/uploads/2024/03/13334556a.webp?fit=438%2C531&ssl=1' },
    { id: 3, name: 'Kids Jacket', price: 1299, image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI322940328002_alternate10?$plpDeskRFAlt$' },
    { id: 4, name: 'Kids Jeans', price: 599, image: 'https://assets.ajio.com/medias/sys_master/root/20240912/obOV/66e2ef551d763220fae23536/-473Wx593H-442588607-ltblue-MODEL.jpg' },
  ];

  return (
    <section id="kids-collection" className="collection-section">
      <h2>Kids Collection</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button
            className="add-to-cart"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
};

export default KidsCollection;
