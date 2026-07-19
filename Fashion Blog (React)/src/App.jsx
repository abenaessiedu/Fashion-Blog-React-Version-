import React from 'react';
import Header from './Components/Header'; 
import Nav from './Components/Nav'; 
import Article from './Components/Article'; 
import Footer from './Components/Footer'; 

import './App.css'

export default function App() {


  return (
    <div className="app"> 
    <Header /> 

    <Nav type="main"/> 

    <main className="main"> 
      <Article 
      title=" On the Street in Brooklyn"
      image={}
      altTest=""
      content=""
      
      /> 
      <Article 
      title="Vintage in Vogue"
      image={}
      altTest=""
      content=""
      
      /> 





      
    </main>

    <Footer /> 
    
    
    </div>

  ); 
}