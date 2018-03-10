import React, {Component} from 'react';
import style from '../styles/menu.css';
import logo from '../assets/logo.png'

export default class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <div className='logo'>
          <img src={logo} width='275' height='43' alt='BuildingConnected'/>
        </div>
        <div className='menu-items'>
          <a className='menu-item'>For GC's</a>
          <a className='menu-item'>For Subs</a>
          <a className='menu-item'>For Owners</a>
          <a className='menu-item'>About</a>
          <a className='menu-item login'>Login</a>
          <button className='menu-button'>Request Demo</button>
        </div>
      </div>
    );
  }
}

