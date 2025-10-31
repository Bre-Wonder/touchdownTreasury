import React from 'react';
import './GoDucksModal.css';

interface GoDucksModalProps {
  isOpen: boolean;
  onAgree: () => void;
}

const GoDucksModal: React.FC<GoDucksModalProps> = ({ isOpen, onAgree }) => {
  if (!isOpen) return null;

  return (
    <div className="go-ducks-modal-overlay">
      <div className="go-ducks-modal">
        <div className="go-ducks-modal-content">
          <img 
            src={`${import.meta.env.BASE_URL}images/ducks.png`}
            alt="Ducks" 
            className="go-ducks-image"
          />
          <h2 className="go-ducks-title">Go Ducks!</h2>
          <button 
            className="go-ducks-agree-btn" 
            onClick={onAgree}
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoDucksModal;

