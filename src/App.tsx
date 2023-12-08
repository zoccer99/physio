import React from 'react';
import logo from './logo.svg';
import Home from './Pages/home';


import { Navigation } from './Components/navigation';
import { ServicePage } from './Pages/servicePage';
import { PricingPage } from './Pages/pricingPage';
import { ContactPage } from './Pages/contactPage';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ImagePage } from './Pages/imagePage';
import { AboutPage } from './Pages/aboutPage';
import { Footer } from './Components/footer';



function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      <header className="App-header">
        <Navigation />
      </header>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/services' Component={ServicePage}/>
        <Route path='/pricing' Component={PricingPage}/>
        <Route path='/images' Component={ImagePage}/>
        <Route path='/about' Component={AboutPage}/>
        <Route path='/contact' Component={ContactPage}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
