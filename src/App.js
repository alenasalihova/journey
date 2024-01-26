import React from 'react';
import { ReactDOM } from 'react-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  return (
    <div className="App">
       <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
