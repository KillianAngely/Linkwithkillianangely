import React from 'react';
import'./Navbar.css';
class Navbar extends React.Component {
  render() {
    return(
          <nav className='Navbar_container'>

              <div className='Navbar_item_reset'>
                <h3><a className="item_reset" href="#Navbar">LinkwithKillianAngely</a></h3>
              </div>

              <div className='Navbar_list_item_container'>
                <ul className='Navbar_list_item'>
                  <li className='Navbar_item '><a  className="button_phantom" href="#Work">Work</a></li>
                  <li className='Navbar_item '><a  className="button_phantom" href="/public/index.html">Resume</a></li>
                  <li className='Navbar_item '><a  className="button_phantom" href="mailto:killian.angely@outlook.fr">Contact</a></li>
                </ul>
              </div>
          </nav>
  );
    }
} 

export default Navbar;
