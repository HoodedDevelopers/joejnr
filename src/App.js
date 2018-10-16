import React, { Component } from 'react';
import './App.css';
import Logo from './assets/logo.svg';
import Menu from './assets/menu.png';
import Meal from './assets/box.jpeg';
import Burger from './assets/burger.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-grid">
          <div className="main">
            <div className="content">
              <div className="content-bold">
                Three Generations of chicken lovers means we're pretty good at what we do but we'll let our food do the talking (and the walking).
              </div>
              <div className="content-light">
                Burgers, Southern Style Fried Chicken, Loaded Fries, Milkshakes, Salads...
              </div>
            </div>
            <div className="footer">
              <div className="logo">
                <img src={Logo} alt=""/>
              </div>
              <div className="footer-text">
                <div className="fc-one">
                  <div className="adress-one">22 Hope Street</div>
                  <div className="address-two">Happytown 2222</div>
                </div>
                <div className="fc-two">
                  <div className="phone">Tel: 02 9876 5432</div>
                  <div className="email">Email: hello@joejnr.com.au</div>
                </div>
                <div className="fc-three">
                  <a href="https://www.facebook.com/Joe-Junior-341571203072595/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square"></i></a>
                  <a href="https://www.instagram.com/joejuniorchicken/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="menu-btn">
                <img src={Menu} alt=""/>
              </div>
            </div>
          </div>
          <div className="aside">
            <div className="img-con ic-one"></div>
            <div className="img-con ic-two"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
