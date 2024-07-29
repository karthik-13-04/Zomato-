import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardsSection from './components/CardsSection';
import OffersSection from './components/OffersSection';
import AppDownloadSection from './components/AppDownloadSection';
import ExploreSection from './components/ExploreSection';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <CardsSection />
            <OffersSection />
            <AppDownloadSection />
            <ExploreSection />
            <Footer />
        </div>
    );
};

export default App;
