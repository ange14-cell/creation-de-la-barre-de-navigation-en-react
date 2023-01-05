import React from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuille from './pages/Acceuille';
import About from './pages/About';
import Home from './pages/Home';
import Market from './pages/Market';
import Minceur from './pages/Minceur';
import Vergeture from './pages/Vergeture';
import Compte from './pages/Compte';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Acceuille/>}/>
            <Route path='./about' element = {<About/>}/>
            <Route path='./home' element = {<Home/>}/>
            <Route path='./market' element = {<Market/>}/>
            <Route path='./minceur' element = {<Minceur/>}/>
            <Route path='./tousproduits' element = {<Minceur/>}/>
            <Route path='./vergeture' element = {<Vergeture/>}/>
            <Route path='./compte' element = {<Compte/>}/>
            <Route path='*' element = {<Acceuille/>}/>          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;






