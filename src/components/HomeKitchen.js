import React from 'react';
import './HomeKitchen.css';

const HomeKitchenCollection = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Blender', price: 1499, image: 'https://myborosil.com/cdn/shop/products/my-borosil-food-mixers-blenders-nutrifresh-pb31-29490968264842.jpg?v=1690956757' },
    { id: 2, name: 'Microwave Oven', price: 5999, image: 'https://www.zelect.in/assets/microwave/blog/microwave-oven-types-8a7cd13f6c80287d3a678ad85ce6b4fefd5f0aa40d28330fd61041309fa5ec8a.jpg' },
    { id: 3, name: 'Cooking Set', price: 799, image: 'https://images-cdn.ubuy.co.in/6572eb2a480000687957ac41-cook-n-home-pots-and-pans-nonstick.jpg' },
    { id: 4, name: 'Dishwasher', price: 12999, image: 'https://www.voltasbeko.com/pub/media/Plazathemes/blog/images/d/i/dishwashers-thumbnails.png' },
  ];

  return (
    <section id="home-kitchen-collection" className="collection-section">
      <h2>Home & Kitchen Collection</h2>
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

export default HomeKitchenCollection;
