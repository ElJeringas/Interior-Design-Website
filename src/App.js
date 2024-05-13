import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './containers/Header/Header';
import About from './containers/About/About';
import Banner from './components/Banner/Banner';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <About/>
      <Banner/>
    </div>
  )
}

export default App