import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './containers/Header/Header';
import About from './containers/About/About';
import Banner from './components/Banner/Banner';
import Projects from './containers/Projects/Projects';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <About/>
      <Banner/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App