import React from 'react';
import Header from './Components/Header'; 
import Nav from './Components/Nav'; 
import Article from './Components/Article'; 
import Footer from './Components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app"> 
    <Header /> 

    <Nav /> 

    <main className=""> 
      <Article /> 




      
    </main>

    <Footer /> 
    
    
    </div>

  ); 
}