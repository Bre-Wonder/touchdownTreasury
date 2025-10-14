import React from 'react';
import './ProductGrid.css';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

const ProductGrid: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Vintage Football Jersey',
      price: '$89.00',
      image: '🏈',
      category: 'Apparel'
    },
    {
      id: 2,
      name: 'Championship Ring Replica',
      price: '$149.00',
      image: '💍',
      category: 'Collectibles'
    },
    {
      id: 3,
      name: 'Team Cap Collection',
      price: '$34.00',
      image: '🧢',
      category: 'Accessories'
    },
    {
      id: 4,
      name: 'Signed Football',
      price: '$299.00',
      image: '🏈',
      category: 'Collectibles'
    },
    {
      id: 5,
      name: 'Premium Hoodie',
      price: '$79.00',
      image: '👕',
      category: 'Apparel'
    },
    {
      id: 6,
      name: 'Game Day Mug',
      price: '$24.00',
      image: '☕',
      category: 'Accessories'
    }
  ];

  return (
    <section className="product-section" id="products">
      <div className="product-container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Discover our exclusive collection of football memorabilia</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <span className="product-icon">{product.image}</span>
                <div className="product-overlay">
                  <button className="quick-view-btn">Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <a href="#all-products" className="view-all-btn">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

