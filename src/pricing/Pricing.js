import React, { Component } from 'react';
class Pricing extends Component {
  render() {
    return (

<div id="pricing" className="section pricing-section">
      <div className="container">
        <div className="section-header">          
          <h2 className="section-title">Pricing Plans</h2>
          <span>Pricing</span>
          <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis.</p>
        </div>

        <div className="row pricing-tables">
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="pricing-table">
              <div className="pricing-details">
                <h2>Starter Plan</h2>
                <div className="price">49$ <span>/mo</span></div>
                <ul>
                  <li>Consectetur adipiscing</li>
                  <li>Nunc luctus nulla et tellus</li>
                  <li>Suspendisse quis metus</li>
                  <li>Vestibul varius fermentum erat</li>
                  <li> - </li>
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-common btn-effect">Get Plan</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="pricing-table pricing-big">
              <div className="pricing-details">
                <h2>Popular Plan</h2>
                <div className="price">99$ <span>/mo</span></div>
                <ul>
                  <li>Consectetur adipiscing</li>
                  <li>Nunc luctus nulla et tellus</li>
                  <li>Suspendisse quis metus</li>
                  <li>Vestibul varius fermentum erat</li>
                  <li> - </li>
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-common btn-effect">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="pricing-table">
              <div className="pricing-details">
                <h2>Premium Plan</h2>
                <div className="price">199$ <span>/mo</span></div>
                <ul>
                  <li>Consectetur adipiscing</li>
                  <li>Nunc luctus nulla et tellus</li>
                  <li>Suspendisse quis metus</li>
                  <li>Vestibul varius fermentum erat</li>
                  <li>Suspendisse quis metus</li>
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-common btn-effect">Buy Now</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
  }
}

export default Pricing;