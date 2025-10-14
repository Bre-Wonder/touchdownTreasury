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
      name: 'Mark - The Commissioner',
      price: '$89.00',
      image: '🏈',
      category: 'Apparel'
    },
    {
      id: 2,
      name: 'Jerald',
      price: '$149.00',
      image: '💍',
      category: 'Collectibles'
    },
    {
      id: 3,
      name: 'David',
      price: '$34.00',
      image: '🧢',
      category: 'Accessories'
    },
    {
      id: 4,
      name: 'Rich',
      price: '$299.00',
      image: '🏈',
      category: 'Collectibles'
    },
    {
      id: 5,
      name: 'Eric',
      price: '$79.00',
      image: '👕',
      category: 'Apparel'
    },
  ];

  return (
    <section className="product-section" id="products">
      <div className="product-container">
        <div className="section-header">
          <h2>Roster</h2>
          <p>Take a Look at What Teams Each Player Has</p>
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
                <button className="add-to-cart-btn">View Teams</button>
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

