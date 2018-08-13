import React, { Component } from 'react';
import './App.css';

import ModuleHeader from './Components/Header';
import ModuleFeaturesSection from './Components/Features';
import ModuleFooter from './Components/Footer';
import ModuleMoreSection from './Components/More';
import ModulePricingSection from './Components/Pricing';
import ModuleSlider from './Components/Slider';

class App extends Component {
  render() {
    return (
      <div>
        <ModuleHeader></ModuleHeader>
        <ModuleFeaturesSection></ModuleFeaturesSection>
        <ModuleSlider></ModuleSlider>
        <ModulePricingSection></ModulePricingSection>
        <ModuleMoreSection></ModuleMoreSection>
        <ModuleFooter></ModuleFooter>
      </div>
    );
  }
}

export default App;
