import React, { Component } from 'react';
class Contact extends Component {
  render() {
    return (

<section id="contact" className="section">      
      <div className="contact-form">
        <div className="container">
          <div className="section-header">          
            <h2 className="section-title">Get In Touch</h2>
            <span>Contact</span>
            <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis.</p>
          </div>
          <div className="row">          
            <div className="col-lg-9 col-md-9 col-xs-12">
              <div className="contact-block">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                        <div className="help-block with-errors"></div>
                      </div>                                 
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email" />
                        <div className="help-block with-errors"></div>
                      </div> 
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" placeholder="Subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group"> 
                        <textarea className="form-control" id="message" placeholder="Your Message" rows="7" data-error="Write your message" required></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="submit-button">
                        <button className="btn btn-common btn-effect" id="submit" type="submit">Send Message</button>
                        <div id="msgSubmit" className="h3 hidden"></div> 
                        <div className="clearfix"></div> 
                      </div>
                    </div>
                  </div>            
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12">
              <div className="contact-deatils">
                
                <div className="contact-info_area">
                  <div className="contact-info">
                    <i className="lni-map"></i>
                    <h5>Location</h5>
                    <p>1900 Pico Blvd, New York br Centernial, colorado</p>
                  </div>
                  
                  <div className="contact-info">
                    <i className="lni-star"></i>
                    <h5>E-mail</h5>
                    <p>info@example.com</p>
                  </div>
                  
                  <div className="contact-info">
                    <i className="lni-phone"></i>
                    <h5>Phone</h5>
                    <p>+48 123 456 789</p>
                  </div>
                  
                  <ul className="footer-social">
                    <li><a className="facebook" href="#"><i className="lni-facebook-filled"></i></a></li>
                    <li><a className="twitter" href="#"><i className="lni-twitter-filled"></i></a></li>
                    <li><a className="linkedin" href="#"><i className="lni-linkedin-fill"></i></a></li>
                    <li><a className="google-plus" href="#"><i className="lni-google-plus"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>            
    </section>
   );
 }
}

export default Contact;