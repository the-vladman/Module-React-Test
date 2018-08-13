import React, { Component } from 'react';
import './App.css';

import ModuleHeader from './Components/Header';
import ModuleLandingSection from './Components/Landing';
import ModuleFooter from './Components/Footer';
import ModuleMoreSection from './Components/More';
import ModulePricingSection from './Components/Pricing';
import ModuleSlider from './Components/Slider';

class App extends Component {
  render() {
    return (
      <div>
        <ModuleHeader></ModuleHeader>
        <ModuleLandingSection></ModuleLandingSection>
        <ModuleSlider></ModuleSlider>
        <ModulePricingSection></ModulePricingSection>
        <ModuleMoreSection></ModuleMoreSection>
        <ModuleFooter></ModuleFooter>
      </div>
    );
  }
}

export default App;
