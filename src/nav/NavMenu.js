import React, { Component } from 'react';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((Menuname, index) =>
    <li className="nav-item" key={index}><a className="nav-link page-scroll" href={'#' + Menuname.link.toLowerCase()}>
      {Menuname.title}</a>
    </li>
  );
  return (
    <ul className="navbar-nav mr-auto w-100 justify-content-end">{listItems}</ul>
  );
}

const numbers = [
{link: 'slider-area', title: 'Home'}, 
{link: 'services', title: 'Services'}, 
{link: 'features', title: 'Features'}, 
{link: 'portfolios', title: 'Works'}, 
{link: 'pricing', title: 'Pricing'}, 
{link: 'team', title: 'Team'}, 
{link: 'subscribe', title: 'Subscribe'}, 
{link: 'blog', title: 'Blog'}, 
{link: 'contact', title: 'Contact'}
];
class NavMenu extends Component {


  render() { 

    return (
      <div className="collapse navbar-collapse" id="navbarCollapse">
      <NumberList numbers={numbers} />
                 
          </div>
    );
  }
}

export default NavMenu;