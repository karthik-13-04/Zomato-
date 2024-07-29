import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="card">
                <div className="card-content">
                    <h2>Order Online</h2>
                    <p>Stay home and order to your doorstep</p>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <h2>Dine-In</h2>
                    <p>View the city's favourite dining venues</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
