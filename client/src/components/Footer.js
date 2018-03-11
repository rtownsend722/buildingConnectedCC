import React, {Component} from 'react';
import style from '../styles/footer.css';
import logo from '../assets/logo.png';
import logoLarge from '../assets/logo-large.png';
import facebook from '../assets/fb-icon.png';
import linkedIn from '../assets/linkedIn-icon.png';
import twitter from '../assets/twitter-icon.png';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.props.handleClick.bind(this); 
  }
  render() {
    return (
      <div className='f-container'>
        <div className='footer'>
          <div className='f-logo'>
            <img src={logo} width='200' height='31' alt='BuildingConnected' />
          </div>
          <div className='f-logo-mobile'>
            <img src={logoLarge} alt='BuildingConnected' />
          </div>

          <div className='f-menu'>
            <div className='f-1'>
              <div className='f-product'>OUR PRODUCT
                <a className='f-menu-item' onClick={this.handleClick} >For GC's</a>
                <a className='f-menu-item' onClick={this.handleClick} >For Subs</a>
                <a className='f-menu-item' onClick={this.handleClick} >For Owners</a>
                <a className='f-menu-item' onClick={this.handleClick} >Videos</a>
              </div>

              <div className='f-product'>COMPANY
                <a className='f-menu-item' onClick={this.handleClick} >About</a>
                <a className='f-menu-item' onClick={this.handleClick} >Careers</a>
                <a className='f-menu-item' onClick={this.handleClick} >Blog</a>
                <a className='f-menu-item' onClick={this.handleClick} >Events</a>
              </div>
            </div>

            <div className='f-2'>
              <div className='f-product'>GET IN TOUCH
                <a className='f-menu-item' onClick={this.handleClick} >Help Center</a>
                <a className='f-menu-item' onClick={this.handleClick} >Contact Support</a>
                <a className='f-menu-item' onClick={this.handleClick} >Request a Demo</a>
              </div>

              <div className='f-product'>CONNECT
                <div className='f-icons-wrapper'>
                  <a className='f-menu-icon' onClick={this.handleClick} ><img src={facebook} width='30' height='30' alt='facebook'></img></a>
                  <a className='f-menu-icon' onClick={this.handleClick} ><img src={linkedIn} width='30' height='30' alt='linkedin'></img></a>
                  <a className='f-menu-icon' onClick={this.handleClick} ><img src={twitter} width='30' height='30' alt='twitter'></img></a>
                </div>
                <div className='f-icons-wrapper-mobile'>
                  <a className='f-menu-icon' onClick={this.handleClick} ><img src={facebook} width='50' height='50' alt='facebook'></img></a>
                  <a className='f-menu-icon' onClick={this.handleClick} ><img src={linkedIn} width='50' height='50' alt='linkedin'></img></a>
                  <a className='f-menu-icon' onClick={this.handleClick} ><img src={twitter} width='50' height='50' alt='twitter'></img></a>
                </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}