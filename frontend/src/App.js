import Header from'./pages/Header.js';
import HomePage from'./pages/HomePage.js';
import Footer from './pages/Footer.js';
import './App.css';
import React, { useState } from 'react'
import SearchForm from './pages/SearchForm.js';
import LoadingBar from 'react-top-loading-bar';


function App() {
const [progress, setProgress] = useState(0);
  return (
    <>
    <Header/>
    <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
    <SearchForm setProgress={setProgress}/>
    <HomePage/>
    <Footer/>
    </>
    );
} 

export default App;
 