import React, {Component} from 'react';
import style from '../styles/menu.css';
import logo from '../assets/logo.png'

export default class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <div className='logo'><img src={logo} width='275' height='43' alt='BuildingConnected'/></div>
        <div className='menu-items'>
          <div className='menu-item'>For GC's</div>
          <div className='menu-item'>For Subs</div>
          <div className='menu-item'>For Owners</div>
          <div className='menu-item'>About</div>
          <div className='menu-item'>Login</div>
          <button className='menu-button'>Request Demo</button>
        </div>
      </div>
    );
  }
}

