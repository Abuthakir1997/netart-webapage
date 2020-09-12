import React, { Component } from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Banner from '../src/Components/Banner/Banner';
import Article from '../src/Components/Article/Article';
import Footertop from '../src/Components/Footertop/Footertop';
import FooterBottom from '../src/Components/FooterBottom/FooterBottom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Banner></Banner>
        <Article></Article>
        <Footertop></Footertop>
        <FooterBottom></FooterBottom>
      </div>
    );
  }
}

export default App;
