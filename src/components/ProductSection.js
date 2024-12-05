import React from "react";
import "./ProductSection.css";

const products = [
  {
    id: 1,
    category: "Shirts",
    brand: "Arrow, Bene Kleed & more",
    discount: "MIN. 50% OFF",
    image: "https://assets.ajio.com/medias/sys_master/root/20240111/WICX/659fd1da54c30e6276a3ea12/-473Wx593H-443032273-navy-MODEL.jpg", // Replace with actual image URLs
  },
  {
    id: 2,
    category: "Dresses",
    brand: "Fig, Rio & more",
    discount: "50-70% OFF",
    image: "https://assets.ajio.com/medias/sys_master/root/20230906/Gfkh/64f8f46bddf7791519bc6bb1/-473Wx593H-461388547-white-MODEL.jpg", // Replace with actual image URLs
  },
  {
    id: 3,
    category: "Tops",
    brand: "Marks & Spencer & more",
    discount: "MIN. 40% OFF",
    image: "https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_01_T53_3799U_NZ_X_EC_0", // Replace with actual image URLs
  },
  {
    id: 4,
    category: "Jeans",
    brand: "Levi's, Spykar & more",
    discount: "MIN. 50% OFF",
    image: "https://assets.ajio.com/medias/sys_master/root/he4/h8f/15397622743070/-473Wx593H-460528861-blue-MODEL.jpg", // Replace with actual image URLs
  },
  {
    id: 5,
    category: "Sneakers",
    brand: "Skechers & more",
    discount: "MIN. 50% OFF",
    image: "https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dw7858185c/Home-Page/Mobile/24_09_SKECHERS_12215500_SSS_1WX2H_HOARDING_CC_1170-x-1710_With-Shop-Now.jpg?sw=780&q=95",

  },
  {
    id: 6,
    category: "Beauty",
    brand: "9skin & more",
    discount: "MIN. 50% OFF",
    image: "https://i.pinimg.com/736x/19/ac/38/19ac3850985584074167f01cc6fee50f.jpg",

  },
];

const ProductSection = () => {
  return (
    <div className="product-section">
      <h2 className="section-title">Western Winter Wonderland</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.category} className="product-image" />
            <div className="product-details">
              <p className="category">{product.category}</p>
              <p className="brand">{product.brand}</p>
              <p className="discount">{product.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
