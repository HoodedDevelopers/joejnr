import React, { Component } from 'react';
import './App.css';

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
              <div className="logo">LOGO</div>
              <div className="footer-text">
                <div className="fc-one">
                  <div className="adress-one">22 Hope Street</div>
                  <div className="address-two">Happytown 2222</div>
                </div>
                <div className="fc-two">
                  <div className="email">email</div>
                  <div className="phone">phone</div>
                </div>
                <div className="fc-two">facebook instagram</div>
              </div>
              <div className="menu-btn"></div>
            </div>
          </div>
          <div className="aside">
            <div className="img-con ic-one">
              <div className="img"></div>
              img one
            </div>
            <div className="img-con ic-two">
              <div className="img"></div>
              img two
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
