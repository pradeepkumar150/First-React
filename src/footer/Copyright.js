import React, { Component } from 'react';
import './footer.css';

class Copyright extends Component {
  render() {
    return (
      <div>
       <footer>
      
      <section className="footer-Content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <h3>Essence</h3>
              <div className="textwidget">
                <p>If you think you have the passion, 
                attitude and capability to join us 
                the next big software company
                s so that we can get the convers.</p>
              </div>
              <ul className="footer-social">
                <li><a className="facebook" href="#"><i className="lni-facebook-filled"></i></a></li>
                <li><a className="twitter" href="#"><i className="lni-twitter-filled"></i></a></li>
                <li><a className="linkedin" href="#"><i className="lni-linkedin-fill"></i></a></li>
                <li><a className="google-plus" href="#"><i className="lni-google-plus"></i></a></li>
              </ul> 
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Short Link</h3>
                <ul className="menu">
                  <li><a href="#">Service</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Advance Sarch</a></li>
                  <li><a href="#">Site Map</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Contact Us</h3>
                <ul className="contact-footer">
                  <li>
                    <strong>Address :</strong> <span>1900 Pico Blvd, New York br Centernial, colorado</span>
                  </li>
                  <li>
                    <strong>Phone :</strong> <span>+91 123 456 7890</span>
                  </li>
                  <li>
                    <strong>E-mail :</strong> <span><a href="#">info@example.com</a></span>
                  </li>
                </ul> 
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Instagram</h3>
                <ul className="instagram-footer">
                  <li><a href="#"><img src={require('../img/instagram/insta1.jpg')} alt="" /></a></li>
                  <li><a href="#"><img src={require('../img/instagram/insta2.jpg')} alt="" /></a></li>
                  <li><a href="#"><img src={require('../img/instagram/insta3.jpg')} alt="" /></a></li>
                  <li><a href="#"><img src={require('../img/instagram/insta4.jpg')} alt="" /></a></li>
                  <li><a href="#"><img src={require('../img/instagram/insta5.jpg')} alt="" /></a></li>
                  <li><a href="#"><img src={require('../img/instagram/insta6.jpg')} alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-info float-left">
                <p>Crafted by <a href="http://uideck.com" rel="nofollow">UIdeck</a></p>
              </div>              
              <div className="float-right">  
                <ul className="nav nav-inline">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">About Prime</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">TOS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Return Policy</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">FAQ</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
        <a href="#" className="back-to-top">
      <i className="lni-arrow-up"></i>
    </a>

    <div id="loader">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div> 
      </div> 
    );
  }
}

export default Copyright;