import React from 'react'
import FeatureProduct from './components/FeatureProduct.js';
import HeroSection from './components/HeroSection'
import Services from './components/Services';

const Home = () => {
    const data ={
        name: "SpyGizmo store",
    };
  return <>
  <HeroSection myData={data}></HeroSection>
  <FeatureProduct/>
  <Services/>
 
  </>


};

export default Home;
