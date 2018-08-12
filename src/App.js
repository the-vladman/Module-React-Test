import React, { Component } from 'react';
import './App.css';

import ModuleHeader from './Components/Header';
import ModuleFeaturesSection from './Components/Features';
import ModuleMoreSection from './Components/More';
import ModulePricingSection from './Components/Pricing';
import ModuleFooter from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <ModuleHeader></ModuleHeader>
        <ModuleFeaturesSection></ModuleFeaturesSection>
        <ModulePricingSection></ModulePricingSection>
        <ModuleMoreSection></ModuleMoreSection>
        <ModuleFooter></ModuleFooter>
      </div>
    );
  }
}

export default App;
