import React, {Component} from 'react';
import style from '../styles/menuMobile.css';
import logo from '../assets/logo.png'
import hamburger from '../assets/hamburger.png'

export default class MenuMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClick = this.props.handleClick.bind(this);
  }


  toggleMenu() {
    let currState = this.state.open;
    this.setState({
      open: !currState
    });
  }

  render() {
    let open = this.state.open ? 'open' : 'closed';

    return (
      <div>
        <div className='menu-mobile'>
          <div className='logo-mobile'>
            <img src={logo} width='325' height='51' alt='BuildingConnected' />
          </div>
          <div className='menu-icon' onClick={this.toggleMenu}>
            <img src={hamburger} alt='Menu' />
          </div>
        </div>
        <div className={`full-menu-${open}`}>
          <div className='fm-item' onClick={this.handleClick} >For GC's</div>
          <div className='fm-item' onClick={this.handleClick} >For Subs</div>
          <div className='fm-item' onClick={this.handleClick} >For Owners</div>
          <div className='fm-item' onClick={this.handleClick} >About</div>
          <div className='fm-item login' onClick={this.handleClick} >Login</div>
        </div>
      </div>
    );
  }
}