import React, { Component } from 'react';
import logo from './logo.svg';
//import './main.css';
//import List from './List';
import Content from './content/Content';
import HeaderMenu from './nav/NavMenu';
import Slider from './slider/Slider';
import Services from './services/Services';
import LikeButton from './slider/LikeButton';
import Contact from './contact/Contact';
import Pricing from './pricing/Pricing';
import Footer from './footer/Copyright';
class App extends Component {
  render() {
    return (
      <div>
       <header id="slider-area">  
      <nav className="navbar navbar-expand-md fixed-top scrolling-navbar bg-white">
        <div className="container">          
          <a className="navbar-brand" href="index.html"><span className="lni-bulb"></span>ESSENCE</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i className="lni-menu"></i>
          </button>
          <HeaderMenu />
        </div>
       </nav> 
       
      // Slider
      <Slider /> 

     </header>
     <LikeButton />
    <Services />
    
     <section className="call-action section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="cta-trial text-center">
              <h3>Are You Ready To Get Started?</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br /> Lorem ipsum dolor sit amet, consectetuer</p>
              <a href="#" className="btn btn-common btn-effect">Purchase Now!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    <section id="features" className="section">
      <div className="container">
        <div className="section-header">          
          <h2 className="section-title">Why Choose Us</h2>
          <span>Why</span>
          <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis.</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="featured-box">
              <div className="featured-icon">
                <i className="lni-layout"></i>
              </div>
              <div className="featured-content">
                <div className="icon-o"><i className="lni-layout"></i></div>
                <h4>Refreshing Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="featured-box">
              <div className="featured-icon">
                <i className="lni-tab"></i>
              </div>
              <div className="featured-content">
                <div className="icon-o"><i className="lni-tab"></i></div>
                <h4>Fully Responsive</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="featured-box">
              <div className="featured-icon">
                <i className="lni-rocket"></i>
              </div>
              <div className="featured-content">
                <div className="icon-o"><i className="lni-rocket"></i></div>
                <h4>Fast & Smooth</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="featured-box">
              <div className="featured-icon">
                <i className="lni-database"></i>
              </div>
              <div className="featured-content">
                <div className="icon-o"><i className="lni-database"></i></div>
                <h4>SEO Optimized</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="featured-box">
              <div className="featured-icon">
                <i className="lni-leaf"></i>
              </div>
              <div className="featured-content">
                <div className="icon-o"><i className="lni-leaf"></i></div>
                <h4>Clean Code</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="featured-box">
              <div className="featured-icon">
                <i className="lni-pencil"></i>
              </div>
              <div className="featured-content">
                <div className="icon-o"><i className="lni-pencil"></i></div>
                <h4>Free 24/7 Support</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="video-promo section">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
              <div className="video-promo-content text-center">
                <a href="https://www.youtube.com/embed/LSgBpbgTlhw" className="video-popup"><i className="lni-film-play"></i></a>
                <h2 className="wow zoomIn" data-wow-duration="1000ms" data-wow-delay="100ms">Our Introductory Video</h2>
                <p className="wow zoomIn" data-wow-duration="1000ms" data-wow-delay="100ms">Learn more about us, its only 30mins</p>
              </div>
          </div>
        </div>
      </div>
    </section>


    <section id="portfolios" className="section">
      
      <div className="container">
        <div className="section-header">          
          <h2 className="section-title">Our Works</h2>
          <span>Works</span>
          <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis.</p>
        </div>
        <div className="row">          
          <div className="col-md-12">
            
            <div className="controls text-center">
              <a className="filter active btn btn-common btn-effect" data-filter="all">
                All 
              </a>
              <a className="filter btn btn-common btn-effect" data-filter=".design">
                Design 
              </a>
              <a className="filter btn btn-common btn-effect" data-filter=".development">
                Development
              </a>
              <a className="filter btn btn-common btn-effect" data-filter=".print">
                Print 
              </a>
            </div>
            
          </div>
        </div>

        
        <div id="portfolio" className="row">
          <div className="col-lg-4 col-md-6 col-xs-12 mix development print">
            <div className="portfolio-item">
              <div className="shot-item">
               <img src={require('./img/portfolio/img-1.jpg')} alt="" /> 
                <div className="single-content">
                  <div className="fancy-table">
                    <div className="table-cell">
                      <div className="zoom-icon">
                        <a className="lightbox" href="./img/portfolio/img-1.jpg"><i className="lni-zoom-in item-icon"></i></a>
                      </div>
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>               
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mix design print">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src={require('./img/portfolio/img-2.jpg')} alt="" /> 
                <div className="single-content">
                  <div className="fancy-table">
                    <div className="table-cell">
                      <div className="zoom-icon">
                        <a className="lightbox" href="./img/portfolio/img-2.jpg"><i className="lni-zoom-in item-icon"></i></a>
                      </div>
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>               
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mix development">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src={require('./img/portfolio/img-3.jpg')} alt="" />  
                <div className="single-content">
                  <div className="fancy-table">
                    <div className="table-cell">
                      <div className="zoom-icon">
                        <a className="lightbox" href="./img/portfolio/img-3.jpg"><i className="lni-zoom-in item-icon"></i></a>
                      </div>
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>               
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mix development design">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src={require('./img/portfolio/img-4.jpg')} alt="" /> 
                <div className="single-content">
                  <div className="fancy-table">
                    <div className="table-cell">
                      <div className="zoom-icon">
                        <a className="lightbox" href="./img/portfolio/img-4.jpg"><i className="lni-zoom-in item-icon"></i></a>
                      </div>
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>               
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mix development">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src={require('./img/portfolio/img-5.jpg')} alt="" />  
                <div className="single-content">
                  <div className="fancy-table">
                    <div className="table-cell">
                      <div className="zoom-icon">
                        <a className="lightbox" href="./img/portfolio/img-5.jpg"><i className="lni-zoom-in item-icon"></i></a>
                      </div>
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>               
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mix print design">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src={require('./img/portfolio/img-6.jpg')} alt="" />  
                <div className="single-content">
                  <div className="fancy-table">
                    <div className="table-cell">
                      <div className="zoom-icon">
                        <a className="lightbox" href="./img/portfolio/img-6.jpg"><i className="lni-zoom-in item-icon"></i></a>
                      </div>
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>               
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
    <Pricing />

    <div className="counters section bg-defult">
      <div className="container">
        <div className="row"> 
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="facts-item"> 
              <div className="icon">
                <i className="lni-rocket"></i>
              </div>                
              <div className="fact-count">
                <h3><span className="counter">100</span>%</h3>
                <h4>Faster</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="facts-item">
              <div className="icon">
                <i className="lni-coffee-cup"></i>
              </div>                
              <div className="fact-count">
                <h3><span className="counter">700</span></h3>
                <h4>Cup of Coffee</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="facts-item">
              <div className="icon">
                <i className="lni-user"></i>
              </div>                
              <div className="fact-count">
                <h3><span className="counter">10000</span>+</h3>
                <h4>Active Clients</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="facts-item">
              <div className="icon">
                <i className="lni-heart"></i>
              </div>                
              <div className="fact-count">
                <h3><span className="counter">1689</span></h3>
                <h4>Peoples Love</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="testimonial section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div id="testimonials" className="touch-slider owl-carousel">
              <div className="item">
                <div className="testimonial-item">
                  <div className="author">
                    <div className="img-thumb">
                    <img src={require('./img/testimonial/img1.jpg')} alt="" /> 
                    </div>
                    <div className="author-info">
                      <h2><a href="#">Johnathan Doe</a></h2>
                      <span>Marketing Head Matrix media</span>
                    </div>
                  </div>
                  <div className="content-inner">
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star"></i></span>
                    <span><i className="lni-star"></i></span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="author">
                    <div className="img-thumb">
                    <img src={require('./img/testimonial/img2.jpg')} alt="" />
                    </div>
                    <div className="author-info">
                      <h2><a href="#">Oidila Matik</a></h2>
                      <span>President Lexo Inc</span>
                    </div>
                  </div>
                  <div className="content-inner">
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="author">
                    <div className="img-thumb">
                    <img src={require('./img/testimonial/img3.jpg')} alt="" />
                    </div>
                    <div className="author-info">
                      <h2><a href="#">- Alex Dattilo</a></h2>
                      <span>CEO Optima Inc</span>
                    </div>
                  </div>
                  <div className="content-inner">
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star"></i></span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="author">
                    <div className="img-thumb">
                    <img src={'./img/testimonial/img4.jpg'} alt="" />
                    </div>
                    <div className="author-info">
                      <h2><a href="#">Oidila Matik</a></h2>
                      <span>President Lexo Inc</span>
                    </div>
                  </div>
                  <div className="content-inner">
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="author">
                    <div className="img-thumb">
                    <img src={require('./img/testimonial/img1.jpg')} alt="" />
                    </div>
                    <div className="author-info">
                      <h2><a href="#">- Alex Dattilo</a></h2>
                      <span>CEO Optima Inc</span>
                    </div>
                  </div>
                  <div className="content-inner">
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star-filled"></i></span>
                    <span><i className="lni-star"></i></span>
                    <span><i className="lni-star"></i></span>
                    <span><i className="lni-star"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="cta" className="section" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12">            
            <div className="cta-text">
              <h5>Stil confused? Download a free lite version to get started!</h5>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 text-right">
            <a href="#" className="btn btn-border">Download</a>
          </div>
        </div>
      </div>
    </section>

    <section id="team" className="section">
      <div className="container">
        <div className="section-header">          
          <h2 className="section-title">Our Team</h2>
          <span>Team</span>
          <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis.</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="single-team">
              <img src={require('./img/team/team1.png')} alt="" />
              <div className="team-details">
                <div className="team-inner">
                  <h4 className="team-title">Jhon Doe</h4>
                  <p>Chief Technical Officer</p>
                  <ul className="social-list">
                    <li className="facebook"><a href="#"><i className="lni-facebook-filled"></i></a></li>
                    <li className="twitter"><a href="#"><i className="lni-twitter-filled"></i></a></li>
                    <li className="google-plus"><a href="#"><i className="lni-google-plus"></i></a></li>
                    <li className="linkedin"><a href="#"><i className="lni-linkedin-fill"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="single-team">
            <img src={require('./img/team/team2.png')} alt="" />
              <div className="team-details">
                <div className="team-inner">
                  <h4 className="team-title">Luke Chesser</h4>
                  <p>Marketing Executive</p>
                  <ul className="social-list">
                    <li className="facebook"><a href="#"><i className="lni-facebook-filled"></i></a></li>
                    <li className="twitter"><a href="#"><i className="lni-twitter-filled"></i></a></li>
                    <li className="google-plus"><a href="#"><i className="lni-google-plus"></i></a></li>
                    <li className="linkedin"><a href="#"><i className="lni-linkedin-fill"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="single-team">
            <img src={require('./img/team/team3.png')} alt="" />
              <div className="team-details">
                <div className="team-inner">                  
                  <h4 className="team-title">David Givens</h4>
                  <p>Business Manager</p>
                  <ul className="social-list">
                    <li className="facebook"><a href="#"><i className="lni-facebook-filled"></i></a></li>
                    <li className="twitter"><a href="#"><i className="lni-twitter-filled"></i></a></li>
                    <li className="google-plus"><a href="#"><i className="lni-google-plus"></i></a></li>
                    <li className="linkedin"><a href="#"><i className="lni-linkedin-fill"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="single-team">
            <img src={require('./img/team/team4.png')} alt="" />
              <div className="team-details">
                <div className="team-inner">
                  <h4 className="team-title">Annie Spratt</h4>
                  <p>Graphic Designer</p>
                  <ul className="social-list">
                    <li className="facebook"><a href="#"><i className="lni-facebook-filled"></i></a></li>
                    <li className="twitter"><a href="#"><i className="lni-twitter-filled"></i></a></li>
                    <li className="google-plus"><a href="#"><i className="lni-google-plus"></i></a></li>
                    <li className="linkedin"><a href="#"><i className="lni-linkedin-fill"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div id="subscribe" className="section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 col-md-12 col-xs-12">
            <div className="subscribe-form">
              <div className="form-wrapper">
                <div className="sub-title text-center">
                  <h3>Subscribe to Newsletter</h3>
                  <p>Weekly Freebies and More!</p>
                </div>
                <form>
                  <div className="row">
                    <div className="col-12 form-line">
                      <div className="form-group">
                        <input type="text" className="form-control" name="email" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-12 form-line">
                      <div className="form-group">
                        <input type="text" className="form-control" name="phone" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-12 form-line">
                      <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email" />
                      </div> 
                    </div>
                    <div className="col-12">
                      <div className="form-submit">
                        <button type="submit" className="btn btn-common btn-effect">Subscribe Now</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="sub-item-box">
              <div className="icon-box">
                <i className="lni-bullhorn"></i>
              </div>
              <div className="text-box">
                <h4>Weekly Free Learning Materials</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, laborum libero beatae obcaecati.</p>
              </div>
            </div>
            <div className="sub-item-box">
              <div className="icon-box">
                <i className="lni-book"></i>
              </div>
              <div className="text-box">
                <h4>Free PDF to Get Started</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, laborum libero beatae obcaecati.</p>
              </div>
            </div>
            <div className="sub-item-box">
              <div className="icon-box">
                <i className="lni-timer"></i>
              </div>
              <div className="text-box">
                <h4>10% Instant Discount</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, laborum libero beatae obcaecati.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section id="blog" className="section">
     
      <div className="container">
        <div className="section-header">          
          <h2 className="section-title">Blogs</h2>
          <span>Blogs</span>
          <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis.</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
            
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a href="single-post.html">
            <img src='./img/blog/img1.jpg' alt="" />
                </a>                
              </div>
              <div className="blog-item-text"> 
                <div className="date"><i className="lni-calendar"></i>10 April, 2018</div>
                <h3><a href="single-post.html">10 Tips to Design a High-converting Landing Page</a></h3>
                <div className="meta-tags">
                  <span><a href="#"><i className="lni-eye"></i> 4.5k Views</a></span>
                  <span><a href="#"><i className="lni-bubble"></i> 07</a></span>
                  <span><a href="#"><i className="lni-reply"></i> 332</a></span>
                </div>
              </div>
            </div>
           
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a href="single-post.html">
            <img src={require('./img/blog/img2.jpg')} alt="" />
                </a>                
              </div>
              <div className="blog-item-text"> 
                <div className="date"><i className="lni-calendar"></i>10 April, 2018</div>
                <h3><a href="single-post.html">How to Design a Website For Your App</a></h3>
                <div className="meta-tags">
                  <span><a href="#"><i className="lni-eye"></i> 4.5k Views</a></span>
                  <span><a href="#"><i className="lni-bubble"></i> 07</a></span>
                  <span><a href="#"><i className="lni-reply"></i> 332</a></span>
                </div>
              </div>
            </div>
            
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a href="single-post.html">
            <img src={require('./img/blog/img3.jpg')} alt="" />
                </a>                
              </div>
              <div className="blog-item-text"> 
                <div className="date"><i className="lni-calendar"></i>10 April, 2018</div>
                <h3><a href="single-post.html">7 Secretes to Optimize Loading Speed of Your Site</a></h3>
                <div className="meta-tags">
                  <span><a href="#"><i className="lni-eye"></i> 4.5k Views</a></span>
                  <span><a href="#"><i className="lni-bubble"></i> 07</a></span>
                  <span><a href="#"><i className="lni-reply"></i> 332</a></span>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
    

    
    <div id="clients" className="section">
      
      <div className="container">
        
        <div className="row" id="clients-scroller">
          <div className="client-item-wrapper">
            <img src={require('./img/clients/img1.png')} alt="" />
          </div>
          <div className="client-item-wrapper">
            <img src={require('./img/clients/img2.png')} alt="" />
          </div>
          <div className="client-item-wrapper">
            <img src={require('./img/clients/img3.png')} alt="" />
          </div>
          <div className="client-item-wrapper">
            <img src={require('./img/clients/img4.png')} alt="" />
          </div>
          <div className="client-item-wrapper">
            <img src={require('./img/clients/img5.png')} alt="" />
          </div>
          <div className="client-item-wrapper">
            <img src={require('./img/clients/img6.png')} alt="" />
          </div>
        </div>
      </div>
    </div>

    <Contact />
    
    
    <section id="google-map-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 padding-0">
            
          </div>
        </div>
      </div>
    </section>
    
     <Footer />   

      </div>
    );
  }
}

export default App;
