import React from 'react';
import './Beauty.css';

const BeautyCollection = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Lipstick', price: 799, image: 'https://assets.ajio.com/medias/sys_master/root/20240726/BWZp/66a351f31d763220fa350c46/-473Wx593H-4939130650-afterhours-MODEL.jpg' },
    { id: 2, name: 'Moisturiser', price: 999, image: 'https://assets.ajio.com/medias/sys_master/root/20230608/5sc6/648176f642f9e729d72f4035/-473Wx593H-4928481020-multi-MODEL.jpg' },
    { id: 3, name: 'Eyeliner Pen', price: 299, image: 'https://assets.ajio.com/medias/sys_master/root/20230323/vRRl/641bf643711cf97ba7e9c8d0/-473Wx593H-4936362620-black-MODEL.jpg' },
    { id: 4, name: 'Vitamin C Serum', price: 899, image: 'https://assets.ajio.com/medias/sys_master/root/20230608/lECs/648176f042f9e729d72f3f53/minimalist-serums-%26-essence-multi-peptide-face-serum-for-anti-ageing.jpg' },
    { id: 5, name: 'Shampoos', price: 1299, image: 'https://assets.ajio.com/medias/sys_master/root/20240725/Y5so/66a1d7366f60443f31b0754b/-473Wx593H-4910461840-multi-MODEL2.jpg' },
  ]

  return (
    <section id="beauty-collection" className="collection-section">
      <h2>Beauty Collection</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button
            className="add-to-cart"
            onClick={() => addToCart(product)}  // Add to Cart logic
          >
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
};

export default BeautyCollection;
