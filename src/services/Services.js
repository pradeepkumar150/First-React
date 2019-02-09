import React, { Component } from 'react';
class Services extends Component {
  render() {
    return (
<section id="services" className="section">
      <div className="container">
        <div className="section-header">          
          <h2 className="section-title">Our Services</h2>
          <span>Services</span>
          <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="item-boxes services-item wow fadeInDown" data-wow-delay="0.2s">
              <div className="icon color-1">
                <i className="lni-pencil"></i>
              </div>
              <h4>Content Writing</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="item-boxes services-item wow fadeInDown" data-wow-delay="0.4s">
              <div className="icon color-2">
                <i className="lni-cog"></i>
              </div>
              <h4>Web Development</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="item-boxes services-item wow fadeInDown" data-wow-delay="0.6s">
              <div className="icon color-3">
                <i className="lni-stats-up"></i>
              </div>
              <h4>Graphic Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="item-boxes services-item wow fadeInDown" data-wow-delay="0.8s">
              <div className="icon color-4">
                <i className="lni-layers"></i>
              </div>
              <h4>UI/UX Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="item-boxes services-item wow fadeInDown" data-wow-delay="1s">
              <div className="icon color-5">
                <i className="lni-tab"></i>
              </div>
              <h4>App Development</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="item-boxes services-item wow fadeInDown" data-wow-delay="1.2s">
              <div className="icon color-6">
                <i className="lni-briefcase"></i>
              </div>
              <h4>Digital Marketing</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    );
  }
}
export default Services;