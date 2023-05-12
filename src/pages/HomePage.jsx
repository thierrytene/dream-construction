import React from 'react'
import Hero from '../components/Hero/Hero';
import SectionServices from '../components/SectionServices';
import Counter from '../components/Counter';


function HomePage() {
  return (
    <>
      <Hero />
      <SectionServices />
      <Counter/>
    </>
  );
}

export default HomePage