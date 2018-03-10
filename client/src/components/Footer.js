import React, {Component} from 'react';
import style from '../styles/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='f-logo'>BUILDINGCONNECTED</div>
        <div className='f-menu'>
          <div className='f-product'>OUR PRODUCT
            <div className='f-menu-item'>For GC's</div>
            <div className='f-menu-item'>For Subs</div>
            <div className='f-menu-item'>For Owners</div>
            <div className='f-menu-item'>Videos</div>
          </div>
          <div className='f-product'>COMPANY
            <div className='f-menu-item'>About</div>
            <div className='f-menu-item'>Careers</div>
            <div className='f-menu-item'>Blog</div>
            <div className='f-menu-item'>Events</div>
          </div>
          <div className='f-product'>GET IN TOUCH
            <div className='f-menu-item'>Help Center</div>
            <div className='f-menu-item'>Contact Support</div>
            <div className='f-menu-item'>Request a Demo</div>
          </div>
          <div className='f-product-connect'>CONNECT
            <div className='f-menu-icon'><img alt='facebook'></img></div>
            <div className='f-menu-icon'><img alt='linkedin'></img></div>
            <div className='f-menu-icon'><img alt='twitter'></img></div>
          </div>
        </div>
      </div>
    );
  }
}