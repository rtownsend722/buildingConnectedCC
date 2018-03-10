import React, {Component} from 'react';
import style from '../styles/legal.css';

export default class Legal extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.props.handleClick.bind(this);
  }
  render() {
    return (
      <div className='legal'>
        <div className='legal-container'>
          <div className='copyright'>©BuildingConnected 2017</div>
          <div className='legal-menu'>
            <div className='legal-item' onClick={this.handleClick} >Terms of Service</div>
            <div className='legal-item' onClick={this.handleClick} >Privacy Policy</div>
            <div className='legal-item' onClick={this.handleClick} >support@buildingconnected.com</div>
          </div>
        </div>
      </div>
    );
  }
}

