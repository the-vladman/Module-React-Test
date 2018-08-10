import React, { Component } from 'react';
import './App.css';

import ModuleHeader from './Components/Header';
import ModuleFooter from './Components/Footer';
import ModuleFeaturesSection from './Components/Features';

class App extends Component {
  render() {
    return (
      <div>
        <ModuleHeader></ModuleHeader>
        <ModuleFeaturesSection></ModuleFeaturesSection>
        <ModuleFooter></ModuleFooter>
      </div>
    );
  }
}

export default App;
