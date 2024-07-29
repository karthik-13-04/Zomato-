import React from 'react';
import './CardsSection.css';

const CardsSection = () => {
    return (
        <div className="cards-section">
            <h1>Collections</h1>
            <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Visakhapatnam, based on trends.</p>
            <div className="card-container">
                {/* Repeat the following card div for each collection */}
                <div className="collection-card"></div>
            </div>
        </div>
    );
};

export default CardsSection;
