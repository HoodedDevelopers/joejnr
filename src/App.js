import React, { Component } from 'react';
import logo from './assets/logo-white.svg';
import chicken from './assets/chicken-white.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="griditem item-1 content">
          <div className="content-chicken">
            <img src={chicken} className="chicken-img" alt=""/>
          </div>
          <div className="content-text">
            Have a speil here about the store and waht it stands for and what it does in an emotional and engaging manner
          </div>
        </div>
        <div className="griditem item-2 logo">
          <img src={logo} className="logo-img"/>
        </div>
        <div className="griditem item-3 menu">
          <div className="menu-items">
            <div className="menu-item">BURGERS,</div>
            <div className="menu-item">FRIED CHICKEN,</div>
            <div className="menu-item">LOADED FRIES,</div>
            <div className="menu-item">MILKSHAKES,</div>
            <div className="menu-item ml">SALADS</div>
          </div>
          <div className="footer">
            <div className="address">
              <div className="address-line">Address 22 Hope street</div>
              <div className="address-line">Happytown 2222</div>
              <div className="address-line">Tel: 02 9875 5432</div>
              <div className="address-line">Email: hello@joejnr.com.au</div>
            </div>
            <div className="social">
              <div className="facebook"><i class="fab fa-facebook-square"></i></div>
              <div className="ig"><i class="fab fa-instagram"></i></div>
            </div>
          </div>
          <div className="button">
            <img src="" alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
