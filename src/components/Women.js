import React from 'react';
import './Women.css';

const WomenCollection = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Women\'s Dress', price: 1299, image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/RY/VH/QC/17769549/aanaya-vol-145-art-silk-designer-party-wear-gown-500x500.jpeg' },
    { id: 2, name: 'Women\'s Shoes', price: 999, image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/WR/BF/KZ/163131389/shoes-jpg-500x500.jpg' },
    { id: 3, name: 'Women\'s Handbag', price: 1999, image: 'https://img.tatacliq.com/images/i17//437Wx649H/MP000000021891415_437Wx649H_202404111339531.jpeg' },
    { id: 4, name: 'Women\'s Jacket', price: 1499, image: 'https://img.cdn.mountainwarehouse.com/product/031178/031178_bla_skyline_womens_hydrophobic_extreme_down_jacket_ecom_lifestyle_aw23_01.jpg' },
  ];

  return (
    <section id="women-collection" className="collection-section">
      <h2>Women\'s Collection</h2>
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

export default WomenCollection;
