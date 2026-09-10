import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ArtMap from './components/ArtMap';
import MovementSection from './components/MovementSection';
import ArtistSection from './components/ArtistSection';
import ArtRoutes from './components/ArtRoutes';
import RegionExplorer from './components/RegionExplorer';
import Statistics from './components/Statistics';
import FactSection from './components/FactSection';
import Footer from './components/Footer';

import { locations } from './data/locations';

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArtForm, setActiveArtForm] = useState('All');
  const [activePeriod, setActivePeriod] = useState('All Periods');
  const [activeRoute, setActiveRoute] = useState(null);

  // Handler to select location by ID or location object
  const handleSelectLocation = (locInput) => {
    if (!locInput) {
      setSelectedLocation(null);
      return;
    }
    if (typeof locInput === 'string') {
      const found = locations.find((l) => l.id === locInput);
      if (found) setSelectedLocation(found);
    } else {
      setSelectedLocation(locInput);
    }
    document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handler to reset all search/filter states
  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveArtForm('All');
    setActivePeriod('All Periods');
    setActiveRoute(null);
  };

  // Handler for Region Explorer card click
  const handleRegionSelect = (regionName) => {
    setSearchQuery(regionName);
    document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F2E8] text-[#2A2420] font-sans flex flex-col selection:bg-[#E8700A] selection:text-white">
      {/* Navbar Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Educational Introduction */}
        <Introduction />

        {/* 3. Main Interactive India Map & Detail Panel */}
        <ArtMap
          locations={locations}
          selectedLocation={selectedLocation}
          onSelectLocation={handleSelectLocation}
          onCloseLocation={() => setSelectedLocation(null)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeArtForm={activeArtForm}
          onArtFormChange={setActiveArtForm}
          activePeriod={activePeriod}
          onPeriodChange={setActivePeriod}
          onResetFilters={handleResetFilters}
          activeRoute={activeRoute}
          onArtistClick={(artist) => {
            if (artist.associatedLocationId) {
              handleSelectLocation(artist.associatedLocationId);
            }
          }}
        />

        {/* 4. Region Explorer Cards */}
        <RegionExplorer onFilterRegion={handleRegionSelect} />

        {/* 5. Art Movements Section */}
        <MovementSection onSelectLocation={handleSelectLocation} />

        {/* 6. Curated Artistic Routes Section */}
        <ArtRoutes
          activeRoute={activeRoute}
          onSelectRoute={setActiveRoute}
          onSelectLocation={handleSelectLocation}
        />

        {/* 7. Artists Section */}
        <ArtistSection onSelectArtist={(artist) => {
          if (artist.associatedLocationId) {
            handleSelectLocation(artist.associatedLocationId);
          }
        }} />

        {/* 8. Art History Statistics */}
        <Statistics />

        {/* 9. Interactive "Did You Know?" Fact Rotator */}
        <FactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
