import React, { Component } from 'react';
import logo from './assets/logo-white.svg';
import chicken from './assets/chicken-white.svg';
import menu from './assets/menu-btn.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="griditem item-1 content">
          <div className="content-text">
            <div className="content-chicken">
              <img src={chicken} className="chicken-img" alt=""/>
            </div>
            Three Generations of chicken lovers means we're pretty good at what we do but we'll let our food do the talking (and the walking).
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
              <div className="address-line">Shop G01/580 580 Princess Highway</div>
              <div className="address-line">Kirrawee, 2232</div>
              <div className="address-line">Tel: 02 9875 5432</div>
              <div className="address-line">Email: info@joejnr.com.au</div>
            </div>
            <div className="social">
              <div className="facebook"><a href="https://www.facebook.com/Joe-Junior-341571203072595/" target="_blank"><i class="fab fa-facebook-square"></i></a></div>
              <div className="ig"><a href="https://www.instagram.com/joejuniorchicken/" target="_blank"><i class="fab fa-instagram"></i></a></div>
            </div>
          </div>
          <div className="button">
            <a href="http://" target="_blank" rel="noopener noreferrer"><img src={menu} alt=""/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
