import React, {Component} from 'react';
import style from '../styles/footer.css';
import logo from '../assets/logo.png';
import facebook from '../assets/fb-icon.png';
import linkedIn from '../assets/linkedIn-icon.png';
import twitter from '../assets/twitter-icon.png';

export default class Footer extends Component {
  render() {
    return (
      <div className='f-container'>
        <div className='footer'>
          <div className='f-logo'>
            <img src={logo} width='200' height='31' alt='BuildingConnected' />
          </div>
          <div className='f-menu'>
            <div className='f-product'>OUR PRODUCT
              <a className='f-menu-item'>For GC's</a>
              <a className='f-menu-item'>For Subs</a>
              <a className='f-menu-item'>For Owners</a>
              <a className='f-menu-item'>Videos</a>
            </div>
            <div className='f-product'>COMPANY
              <a className='f-menu-item'>About</a>
              <a className='f-menu-item'>Careers</a>
              <a className='f-menu-item'>Blog</a>
              <a className='f-menu-item'>Events</a>
            </div>
            <div className='f-product'>GET IN TOUCH
              <a className='f-menu-item'>Help Center</a>
              <a className='f-menu-item'>Contact Support</a>
              <a className='f-menu-item'>Request a Demo</a>
            </div>
            <div className='f-product'>CONNECT
              <div className='f-icons-wrapper'>
                <a className='f-menu-icon'><img src={facebook} width='30' height='30' alt='facebook'></img></a>
                <a className='f-menu-icon'><img src={linkedIn} width='30' height='30' alt='linkedin'></img></a>
                <a className='f-menu-icon'><img src={twitter} width='30' height='30' alt='twitter'></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}