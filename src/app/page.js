'use client';

import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import AboutUs from './components/AboutUs';
import Programmes from './components/Programmes';
import Packages from './components/Packages';
import SpecialOffers from './components/SpecialOffers';
import MaltaExperience from './components/MaltaExperience';
import Accomplishments from './components/Accomplishments';
import ScheduleCalendar from './components/ScheduleCalendar';
import LeadGenForm from './components/LeadGenForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* About Us moved to top as per prompt */}
      <div style={{ paddingTop: '100px', backgroundColor: 'var(--navy)' }}>
        <AboutUs />
      </div>

      <HeroCarousel />
      
      <Programmes />
      
      <Packages />
      
      <SpecialOffers />
      
      <MaltaExperience />
      
      <Accomplishments />
      
      <ScheduleCalendar />
      
      <LeadGenForm />
      
      <Footer />
    </main>
  );
}
