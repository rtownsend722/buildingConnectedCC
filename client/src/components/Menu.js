import React, {Component} from 'react';
import style from '../styles/menu.css';
import logo from '../assets/logo.png'

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.props.handleClick.bind(this);
  }

  render() {
    return (
      <div className='menu-main'>
        <div className='logo'>
          <img src={logo} width='275' height='43' alt='BuildingConnected' />
        </div>
        <div className='menu-items'>
          <a className='menu-item' onClick={this.handleClick} >For GC's</a>
          <a className='menu-item' onClick={this.handleClick} >For Subs</a>
          <a className='menu-item' onClick={this.handleClick} >For Owners</a>
          <a className='menu-item' onClick={this.handleClick} >About</a>
          <a className='menu-item login' onClick={this.handleClick} >Login</a>
          <button className='menu-button' onClick={this.handleClick} >Request Demo</button>
        </div>
      </div>
    );
  }
}

