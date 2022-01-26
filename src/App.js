import './App.css';
import React from 'react';
import Card from './Card';


const App = () => {
  
  return (
    <div className="cards-container">
      <Card firstName="John" lastName="Freeman" workPlace="Pizza Thief" firstAddress="2610 NW Vaughn St, Portland," state="OR 97210" country="United States" />
      <Card firstName="Angela" lastName="Sliders" workPlace="Max Steaks" firstAddress="3653 Germantown Ave, Philadelphia," state="PA 19140" country="United States" />
      <Card firstName="Rita" lastName="Lehigh"  workPlace="Pizza Ranch" firstAddress="1327 Main St Ste. 6, Billing Heights," state="MT 59105" country="United States" />
    </div>
  );
}

export default App;
