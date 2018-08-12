import React, { Component } from 'react';
import './App.css';

import ModuleHeader from './Components/Header';
import ModuleFeaturesSection from './Components/Features';
import ModuleMoreSection from './Components/More';
import ModuleFooter from './Components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <ModuleHeader></ModuleHeader>
        <ModuleFeaturesSection></ModuleFeaturesSection>
        <ModuleMoreSection></ModuleMoreSection>
        <ModuleFooter></ModuleFooter>
      </div>
    );
  }
}

export default App;
