import React from 'react';
import'./Footer.css';
class Footer extends React.Component {
  render() {
    return(
       <footer className='Footer_container'>
            <div className='label'>
                <p>© 2023 Killian Angely</p>
            </div>

            <div className='list_item_footer_container'>
                <ul className='list_item_footer'>
                    <li ><a className='item_footer' href="https://www.linkedin.com/in/killian-angely-a2035b242/">Linkedin</a></li>
                    <li ><a className='item_footer' href="https://github.com/KillianAngely">Github</a></li>
                </ul>
            </div>
       </footer>
  );
    }
} 

export default Footer;
