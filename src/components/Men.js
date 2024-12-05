import React from 'react';
import './Men.css';

const MenCollection = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Men\'s T-shirt', price: 499, image: 'https://assets.ajio.com/medias/sys_master/root/20240704/Ykya/668724f46f60443f31704ee2/-473Wx593H-469664724-mint-MODEL.jpg' },
    { id: 2, name: 'Men\'s Jeans', price: 999, image: 'https://m.media-amazon.com/images/I/81jO8l9TkiL._AC_UF1000,1000_QL80_.jpg' },
    { id: 3, name: 'Men\'s Shoes', price: 1999, image: 'https://tiimg.tistatic.com/fp/1/007/747/casual-wear-mens-shoes-with-lace-closure-all-size-available--320.jpg' },
    { id: 4, name: 'Men\'s Jacket', price: 2499, image: 'https://www.thejacketmaker.ie/cdn/shop/files/Men-Leather-Jackets-1582970628214_d6c2af3e-cd7e-44b8-88cb-94527f33218d_2048x.webp?v=1719244852' },
  ];

  return (
    <section id="men-collection" className="collection-section">
      <h2>Men's Collection</h2>
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

export default MenCollection;
