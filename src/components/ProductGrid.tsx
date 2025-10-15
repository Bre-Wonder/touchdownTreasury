import React, { useState } from 'react';
import './ProductGrid.css';
import TeamsModal from './TeamsModal';

interface Product {
  id: number;
  name: string;
  wins: number;
  image: string;
  category: string;
}

const ProductGrid: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const products: Product[] = [
    {
      id: 1,
      name: 'Mark - The Commissioner',
      wins: 12,
      image: '🏈',
      category: 'Apparel'
    },
    {
      id: 2,
      name: 'Jerald',
      wins: 8,
      image: '💍',
      category: 'Collectibles'
    },
    {
      id: 3,
      name: 'David',
      wins: 15,
      image: '🧢',
      category: 'Accessories'
    },
    {
      id: 4,
      name: 'Rich',
      wins: 6,
      image: '🏈',
      category: 'Collectibles'
    },
    {
      id: 5,
      name: 'Eric',
      wins: 10,
      image: '👕',
      category: 'Apparel'
    },
  ];

  const handleViewTeams = (playerName: string) => {
    setSelectedPlayer(playerName);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlayer('');
  };

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
                <p className="product-price">{product.wins} Wins</p>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleViewTeams(product.name)}
                >
                  View Teams
                </button>
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
      
      <TeamsModal 
        isOpen={modalOpen}
        onClose={closeModal}
        playerName={selectedPlayer}
      />
    </section>
  );
};

export default ProductGrid;

