/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">Zomato Logo</div>
            <div className="footer-links">
                <div className="link-section">
                    <a href="#">India</a>
                    <a href="#">English</a>
                    <a href="#">About Zomato</a>
                    <a href="#">Who We Are</a>
                    <a href="#">Blog</a>
                    <a href="#">Work With Us</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Report Fraud</a>
                    <a href="#">Press Kit</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="link-section">
                    <a href="#">Zomaverse</a>
                    <a href="#">Zomato</a>
                    <a href="#">Blinkit</a>
                    <a href="#">Feeding India</a>
                    <a href="#">Hyperpure</a>
                    <a href="#">Zomaland</a>
                    <a href="#">Weather Union</a>
                </div>
                <div className="link-section">
                    <a href="#">For Restaurants</a>
                    <a href="#">Partner With Us</a>
                    <a href="#">Apps For You</a>
                    <a href="#">Learn More</a>
                    <a href="#">Privacy</a>
                    <a href="#">Security</a>
                    <a href="#">Terms</a>
                    <a href="#">Sitemap</a>
                </div>
                <div className="social-links">
                    {/* Add social media links or images here */}
                </div>
            </div>
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
        </div>
    );
};

export default Footer;
