import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Menu from './components/layout/Menu';
import Home from './components/layout/Home';
import Ads from './components/layout/Ads';
import Products from './components/layout/Products';
import Ads2 from './components/layout/Ads2';
import IconBoxes from './components/layout/IconBoxes';
import Newsletter from './components/layout/Newsletter';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className='super_container'>
      <Header />
      <Menu />
      <Home />
      <Ads />
      <Products />
      <Ads2 />
      <IconBoxes />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
