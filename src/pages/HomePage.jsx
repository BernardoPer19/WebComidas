// src/pages/HomePage.jsx
import React from 'react';
import Header from '../SectionsPage/Header';
import AboutSection from '../SectionsPage/AboutSection';
import {FeaturedMeals} from '../SectionsPage/FeaturedMeals';
import ContactForm from '../SectionsPage/ContactForm'

const HomePage = () => {
  return (
    <div>
      <Header />
      <FeaturedMeals />
      <AboutSection />
    <ContactForm/>
    </div>
  );
};

export default HomePage;
