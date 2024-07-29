import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="#get-the-app">Get the App</a>
                <a href="#investor">Investor</a>
                <a href="#add-restaurant">Add Restaurant</a>
                <a href="#login">Login</a>
                <a href="#signup">Sign Up</a>
            </nav>
            <div className="hero-content">
                <h1>Zomato</h1>
                <h5>Discover the best food & drinks in Visakhapatnam</h5>
                <select>
                    <option>Bapatla</option>
                    <option>Guntur</option>
                    <option>Kurnool</option>
                    <option>Anakapalli</option>
                    <option>Kakinada</option>
                    <option>Palnadu</option>
                    <option>Parvathipuram</option>
                    <option>East Godavari</option>
                    <option>Eluru</option>
                    <option>Nandyal</option>
                    <option>Prakasam</option>
                    <option>Visakhapatnam</option>
                    <option>Allurisitharamaraju</option>
                    <option>Krishna</option>
                    <option>Nellore</option>
                    <option>Chittoor</option>
                    <option>Ntr</option>
                    <option>Srikakulam</option>
                    <option>Alluri sitharama raju district (paderu)</option>
                    <option>Ananthapuramu</option>
                    <option>Annamayya</option>
                    <option>Kona seema (amalapauram)</option>
                    <option>Kadapa</option>
                    <option>Anantapur</option>
                </select>
            </div>
        </div>
    );
};

export default Header;
